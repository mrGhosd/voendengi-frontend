var config = {
    output: {
        path: '/',
        publicPath: '/',
        filename: './build.js',
        pathinfo: false
    },
    devServer: {
        hot: true,
        noInfo: true,
        inline: true,
        stats: {colors: true},
        historyApiFallback: true
    }
};
module.exports = config;