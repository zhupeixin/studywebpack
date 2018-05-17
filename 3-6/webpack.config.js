var path = require('path')
var ExtractTextWebpackPlugin =require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        app : './src/app.js'
    },
    output : {
        path : path.resolve(__dirname,'dist'),
        publicPath : './dist/',
        filename : '[name].bundle.js',
        chunkFilename:'[name].bundle.js',
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader',
                        options : {
                            // insertInto : '#app',
                            singleton : true,
                            transform : './css.transform.js'
                        }
                        // loader : 'style-loader/url',
                        // loader : 'style-loader/useable',
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            minimize :true,
                            modules :true,
                            localIdentName : '[path][name]_[local]_[hash:base64:5]'
                        }
                        // loader : 'file-loader'
                    }
                ]
            },
            {
                test : /\.less$/,
                use : ExtractTextWebpackPlugin.extract({
                    fallback : {
                        loader : 'style-loader'
                    },
                    use : [
                        {
                            loader : 'css-loader',
                            options : {
                                // minimize :true,
                                modules :true
                            }
                        },
                        {
                            loader :'postcss-loader',
                            options : {
                                ident : 'postcss',
                                plugins : [
                                    require('autoprefixer')(),
                                    require('postcss-cssnext')()
                                ]
                            }
                        },
                        {
                            loader : 'less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins : [
         new ExtractTextWebpackPlugin({
             filename:'[name].min.css',
             allChunks:false
         })
    ]
}