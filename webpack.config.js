const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./assets/js/app.js',
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'bundle.js',
        publicPath:'./'
    },
    module:{
        rules:[{
            test:/\.(js)$/,
            exclude:/(node_modules)/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        },
    
    {
        use: ExtractTextPlugin.extract({
            use: 'css-loader'
        }),
        test:/\.css$/
    }
    ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebpackPlugin({
            template: 'assets/index.html'
        }),
        
    ]
}