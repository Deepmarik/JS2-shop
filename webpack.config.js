const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Server } = require('http');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//базовая настройка webpack
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: { path: path.resolve(__dirname, './dist'), filename: '[name].bundle.js', },

    plugins: [new HtmlWebpackPlugin({
        title: 'JS2-shop',
        template: path.resolve(__dirname, './public/template.html'), // шаблон          
        filename: 'index.html', // название выходного файла
    }),
    new MiniCssExtractPlugin({
        filename: path.resolve(__dirname, './src/assets/scss/main.scss'),
        chunkFilename: '[id].css',
    })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress:true,
        port:9000,
    }
}
