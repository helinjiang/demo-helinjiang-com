const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT_PATH = './dist';

module.exports = {
    entry: {
        '01-user-agent': './src/pages/01-user-agent/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, OUTPUT_PATH)
    },
    plugins: [new CleanWebpackPlugin([OUTPUT_PATH])]
};