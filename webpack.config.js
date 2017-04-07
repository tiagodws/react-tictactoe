const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map",
    context: path.join(__dirname, "src"),
    entry: [
        "./main.js",
    ],
    output: {
        path: path.join(__dirname, "www"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules"),
        ],
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};
