'use strict';
const path = require('path');

module.exports = function(currentWebpack){

    const newConfig = Object.assign( {}, currentWebpack);
    newConfig.resolve.alias = {
        'react-dom': '@hot-loader/react-dom'
    };
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
                     paths: [ path.resolve(__dirname, '../frontend/assets/less') ]
                 },
             },
         ],
    }].concat(newConfig.module.rules[2]['oneOf']);

    return newConfig;
};