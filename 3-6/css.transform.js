// 不是在打包时运行的
module.exports = function (css) {
    console.log(css);
    console.log(window.innerHeight);
    return css.replace('red','green');
}