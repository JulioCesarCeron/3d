const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: "./src/app.js",
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		open: {
			port: 8080,
		},
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			favicon: path.resolve(__dirname, "src/assets/favicon/icon.ico"),
			title: "3d",
			minify: true,
		}),
	],
	output: {
		filename: "[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
