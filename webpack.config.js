const path = require("path");

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
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "sass-loader"
                }, {
                    loader: "postcss-loader"
                }]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules"),
        ],
    }
};
