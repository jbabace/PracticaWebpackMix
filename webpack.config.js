const path = require('path');
const loader = require('sass-loader');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: ['./src/script.js', './src/index.html'],//si no pones index.js break .
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    }
                ],
                include: [path.resolve(__dirname, 'src/')]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    externals: {
        lodash: '_',
        leaflet: 'L',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        filename: 'index.html',
        compress: true,
        port: 8080
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "/dist/input.css",
        })
    ],

};