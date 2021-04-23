const path = require('path');

module.exports = {
    // context: __dirname,
    entry: "./entry.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/], 
                exclude: /(node_modules)/,
                loader: 'babel-loader', 
                options: { // query depreciated
                    presets: ['@babel/env', '@babel/react'] 
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};