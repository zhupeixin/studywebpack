module.exports = {
    // 入口
    entry :{
        app:'./app.js',
    },

    // 出口
    output : {
        filename:'[name].[hash:5].js'
    }
}