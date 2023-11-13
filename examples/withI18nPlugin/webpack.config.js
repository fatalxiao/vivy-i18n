/**
 * @file webpack.dev.config.js
 */

// Vendors
const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Base config
const baseConfig = require('../webpack.base.config.js');

module.exports = merge(baseConfig(require.resolve('react-refresh/babel')), {

    entry: path.join(__dirname, './src/index.js'),

    output: {
        filename: 'index.[hash].js',
        path: path.join(__dirname, './dist')
    },

    devServer: {
        static: path.join(__dirname, './dist'),
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true,
        setupMiddlewares: (middlewares, devServer) => {

            // Login reponse
            devServer.app.get('/login', (req, res) => {
                res.json({
                    code: req.query.username === 'admin' && req.query.password === 'admin' ?
                        2000
                        :
                        4000
                });
            });

            return middlewares;

        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        }),
        new ReactRefreshWebpackPlugin()
    ]

});
