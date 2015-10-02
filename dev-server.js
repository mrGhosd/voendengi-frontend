var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.dev");
var pkg = require('./package.json');

var port = pkg.config.devPort;
var host = pkg.config.devHost;
var server = new WebpackDevServer(webpack(config), {
    // webpack-dev-server options
    publicPath: config.output.publicPath,
    hot: true,
    stats: { colors: true }
});

server.listen(port, host, function() {

});