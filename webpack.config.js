const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports={
    mode: "development",
    entry: {
        main: path.resolve(__dirname,"src/index.js")
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/[name][hash].js",
        assetModuleFilename: "images/[name][ext]",
        clean: true
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname,"dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
                type: "asset/resource"
            },
            {
                test: /\.m?js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "GYM",
            filename: "index.html",
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name][hash].css"
        })
    ]
};