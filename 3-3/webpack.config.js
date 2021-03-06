module.exports = {
    entry : {
        app:'./app.js'
    },

    output : {
        filename: '[name].[hash:8].js'
    },

    module : {
        rules : [
            {
                test : /\.js$/,
                // use : 'babel-loader',
                use : {
                    loader : 'babel-loader',
                },
                exclude : '/node_modules/' // 排除某个目录
            }
        ]
    }
}