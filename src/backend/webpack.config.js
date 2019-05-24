'use strict';
const path = require('path');

module.exports = function (currentWebpack) {

    const newConfig = Object.assign({}, currentWebpack);
    newConfig.resolve.alias = {
        'react-dom': '@hot-loader/react-dom'
    };
    newConfig.resolve.extensions.push('.svelte');
    newConfig.module.rules[2]['oneOf'] = [{
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
    }].concat(newConfig.module.rules[2]['oneOf']);
    newConfig.module.rules[2]['oneOf'] = [
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
        },
        {
            test: /\.m?js$/,
            // Babel must transpile svelte helper files for older browsers.
            exclude: /node_modules\/(?!svelte)/,
            use: require.resolve('babel-loader')
        },
        {
            test: /\.css$/,
            use: [
                require.resolve('style-loader'),
                require.resolve('css-loader')
            ]
        },
    ];

    //console.log('Here', currentWebpack.module.rules[2]['oneOf']);
    //process.exit(1);
    return newConfig;
};