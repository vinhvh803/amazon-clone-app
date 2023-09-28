const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "/dist"),

        filename: "bundle.js"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        //index: 'app.html',
        port: "9500",
        //static: ["./src/public"],
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: false
    },

    module: {
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
        rules: [
            {
                test: /\.js|\.jsx$/,   //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use: 'babel-loader' //loader which we are going to use
            }
        ]
    }
}