var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        application: './scripts/index.js',
        vendor: 'jquery'
    },    
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    watch: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['babel-preset-env']
            }
        }, ]
    },
};