var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './assets/js/custom.js'
    ],
    mode: "development",
    module: {
        rules: [
            // {test: /\.js$/, include: path.join(__dirname, 'assets/js'), loader: 'script-loader'},
            {test: /\.css$/, include: path.join(__dirname, 'assets/css'), loader: ['style-loader', 'css-loader']},
            {test: /\.png$/, include: path.join(__dirname, 'assets/images'), loader: ['file-loader', 'url-loader']},
            {test: /\.jpg$/, include: path.join(__dirname, 'assets/images'), loader: ['file-loader', 'url-loader']},
            {test: /\.gif$/, include: path.join(__dirname, 'assets/images'), loader: ['file-loader', 'url-loader']},
            {test: /\.eot$/, include: path.join(__dirname, 'assets/fonts'), loader: ['file-loader', 'url-loader']},
            {test: /\.svg$/, include: path.join(__dirname, 'assets/fonts'), loader: ['file-loader', 'url-loader']},
            {test: /\.ttf$/, include: path.join(__dirname, 'assets/fonts'), loader: ['file-loader', 'url-loader']},
            {test: /\.woff$/, include: path.join(__dirname, 'assets/fonts'), loader: ['file-loader', 'url-loader']},
            {test: /\.woff2$/, include: path.join(__dirname, 'assets/fonts'), loader: ['file-loader', 'url-loader']},
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/js'),
        publicPath: '/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": 'jquery',
            "window.Tether": 'tether'
        })
    ],
    target: 'web'
}