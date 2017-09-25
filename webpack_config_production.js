import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {HotModuleReplacementPlugin} from 'webpack';

export default {
    entry: [
        path.join(__dirname, 'src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'react'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    /*
                     options: {
                     name: '[name].[ext]',
                     outputPath: 'fonts/',    // where the fonts will go
                     publicPath: '../'       // override the default path
                     }
                     */
                }]
            }
        ]
    },
    resolve: {
        modules: ["node_modules"]
    },
    externals: {
    //    "jquery": "jQuery"
    }
};