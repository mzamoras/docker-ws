'use strict';
const path = require('path');
module.exports = function(currentWebpack){
    console.log("CURRENT WEBPACK", currentWebpack);
    const newConfig = Object.assign( {}, currentWebpack);
    newConfig.entry[1] = path.resolve(__dirname, '../frontend/assets/js/app.js');
    newConfig.plugins[0].options.template = path.resolve(__dirname, '../public/index.html');
    newConfig.resolve.alias = {
        'react-dom': '@hot-loader/react-dom'
    };
    /* newConfig.module.rules.push({
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
        ]
    }); */
    console.log("NEW WEBPACK", newConfig.plugins);
    process.exit();
    return newConfig;
}