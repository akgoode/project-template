var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        application: './scripts/index.js',
        vendor: 'jquery',
        styles: './stylesheets/index.css'
    },    
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css-loader'),
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("styles.css")
    ],
};