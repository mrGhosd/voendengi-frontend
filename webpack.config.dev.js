var webpack = require('webpack');
var pkg = require('./package.json');
var util = require('util');
var path = require('path');
var htmlLoader = [
    'file-loader?name=[path][name].[ext]',
    'template-html-loader?' + [
        'raw=true',
        'engine=lodash',
        'version=' + 1,
        'title=' + 'vd',
        'debug=' + true
    ].join('&')
].join('!');
var entry = {
    app: [
        './app.jsx'
    ]
};
entry.app.push(
    util.format(
        'webpack-dev-server/client?http://%s:%d',
        pkg.config.devHost,
        pkg.config.devPort
    )
);
entry.app.push('webpack/hot/dev-server');

module.exports = {
    devtool: 'inline-source-map',
    entry: entry,
    output: {
        path: __dirname ,
        publicPath: '/',
        filename: 'app.js',
        pathinfo: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.html']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
            { test: /\.html$/, loader: htmlLoader }
        ]
    },
    devServer:{
        publicPath: path.resolve(pkg.config.buildDir),
        hot: true,
        stats: { colors: true }
    }
}