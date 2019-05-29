'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function (currentWebpack) {

    //DETECTING TARGET APP FRAMEWORK
    const IS_REACT = process.argv.indexOf('--svelte') < 0 && process.argv.indexOf('--vue') < 0;
    const IS_SVELTE = process.argv.indexOf('--svelte') > -1;
    const IS_VUE = process.argv.indexOf('--vue') > -1;

    const newConfig = Object.assign({}, currentWebpack);

    newConfig.resolve.alias = {
        'react-dom': '@hot-loader/react-dom',
        'vue$': 'vue/dist/vue.esm.js'
    };
    newConfig.resolve.extensions.push('.svelte');
    newConfig.resolve.extensions.push('.vue');

    // EXTENDING RULES - ONE OF -
    // This rules are going to be inserted before the file loader
    newConfig.module.rules[2]['oneOf'].splice(-1, 0, ...[
        {
            test: /\.less$/,
            use: [
                {
                    loader: require.resolve('style-loader'),
                },
                {
                    loader: require.resolve('css-loader'),
                },
                {
                    loader: require.resolve('less-loader'),
                    options: {
                        paths: [path.resolve(__dirname, '../frontend/assets/less')]
                    },
                },
            ],
        },
        {
            test: /\.svelte$/,
            exclude: /node_modules/,
            use: {
                loader: require.resolve('svelte-loader'),
                options: {
                    emitCss: true,
                    hotReload: true
                }
            }
        }
    ]);


    newConfig.module.rules.splice(-1,0, ...[
        {
            test: /\.vue$/,
            loader: require.resolve('vue-loader')
        }
    ]);

    // EXTENDING THE FILE LOADER TO EXCLUDE VUE AND SVELTE FILES
    newConfig.module.rules[3]['oneOf'][newConfig.module.rules[3]['oneOf'].length - 1].exclude = [/\.(js|mjs|jsx|ts|tsx|svelte|vue)$/, /\.html$/, /\.json$/];

    // IF ITS VUE FRAMEWORK THEN REPLACING STYLE-LOADER FOR VUE-STYLE-LOADER
    if(IS_VUE) {
        newConfig.module.rules[3]['oneOf'] = newConfig.module.rules[3]['oneOf'].map(el => {
            if (el.use && Array.isArray(el.use)) {
                el.use = el.use.map(elu => {
                    if (!elu.loader) {
                        return elu.replace('/style-loader/', '/vue-style-loader/');
                    }
                    return elu;
                });
            } else {
                if (el.loader) {
                    el.loader = el.loader.replace('/style-loader/', '/vue-style-loader/');
                }
            }
            return el;
        });
    }


    // EXTENDING DEFINE PLUGIN
    newConfig.plugins[3].definitions['process.env'] = Object.assign({}, newConfig.plugins[3].definitions['process.env'], {
        'IS_SVELTE': JSON.stringify(IS_SVELTE),
        'IS_REACT': JSON.stringify(IS_REACT),
        'IS_VUE': JSON.stringify(IS_VUE),
    });

    newConfig.plugins = [new VueLoaderPlugin()].concat(newConfig.plugins );

    return newConfig;
};