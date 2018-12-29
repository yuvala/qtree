var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
var extractCssPlugin = new ExtractTextPlugin('main.css');
module.exports = {
    mode: 'development',
    entry:'./src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
            rules: [
                // {
                //     test: /\.js$/,
                //     use: [
                //         {
                //             loader: 'babel-loader',
                //             options: {
                //               'presets': ['env']
                //             }
                //         }
                        
                //     ]
                // }
                // ,
                {
                    test: /\.scss$/,
                    use:['style-loader','css-loader', 'sass-loader']
                    // use: extractCssPlugin.extract({
                    //     fallback: 'style-loader',
                    //     use: [
                    //        // 'style-loader', // creates style nodes from JS strings
                    //         'css-loader', // translates CSS into CommonJS
                    //         'sass-loader' // compiles Sass to CSS, using Node Sass by default
                    //     ]
                    // })
                    
                }
            ]
    },
    plugins:[
        new ExtractTextPlugin('main.css')
    ]
};
 