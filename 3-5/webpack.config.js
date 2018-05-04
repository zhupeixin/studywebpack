var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry : {
        'pageA' : './src/pageA',
    },

    output : {
        path : path.resolve(__dirname,'./dist'),
        filename : '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    module : {

    },

    plugins : [
        new webpack.optimize.splitChunks ({git
            name : 'common',
            minChunk : 2,
        })
    ]
}