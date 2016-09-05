var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	plugins:[
		new ExtractTextPlugin("all.css"),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],	
	entry:{
		index:"./main.js"
	},
	output:{
		path:"dist",
		filename:"all.js"
	},
	module:{	
		loaders:[
			{
				test:/\.(css|less)/,
				loader:ExtractTextPlugin.extract("css!less")
			},
			{
				test:/\.(png|JPG|gif)/,
				loader:"file?name=imgs/[name].[ext]"
			},
			{
				test:/\.html/,
				loader:"html"
			}
		]
	}
	
}
