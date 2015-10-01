var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var pkg = require('./package.json');

var port = pkg.config.devPort;
var host = pkg.config.devHost;

var config = require('./entry.js');
var server = new WebpackDevServer(
    webpack(config), {
        contentBase: './build.js',
        hot: true,
        noInfo: true,
        inline: true,
        stats: { colors: true },
        historyApiFallback: true
    }
);

server.listen(port, host, function (err) {
    if (err) { console.log(err); }
    // opn(url);
});