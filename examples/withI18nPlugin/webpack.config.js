/**
 * @file webpack.dev.config.js
 */

// Vendors
const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Base config
const baseConfig = require('../webpack.base.config.js');

module.exports = merge(baseConfig, {

    entry: path.join(__dirname, './src/index.js'),

    output: {
        filename: 'index.[hash].js',
        path: path.join(__dirname, './dist')
    },

    devServer: {
        static: path.join(__dirname, './dist'),
        hot: true,
        port: 3000,
        historyApiFallback: true,
        onBeforeSetupMiddleware: server => {

            // Login reponse
            server.app.get('/login', (req, res) => {
                res.json({
                    code: req.query.username === 'admin' && req.query.password === 'admin' ?
                        2000
                        :
                        4000
                });
            });

        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        })
    ]

});
