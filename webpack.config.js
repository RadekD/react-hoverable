const path = require('path');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./lib/bundle.js", // string
        libraryTarget: "commonjs",
    },
    externals: {
        "react": "react"
    },
    module: {
        rules: [
            { test: /\.ts(x?)$/, loader: "babel-loader?presets[]=es2015!ts-loader" }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}