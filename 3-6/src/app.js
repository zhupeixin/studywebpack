import base from './css/base.less'
import common from  './css/common.css'


import(/*webpackChunkName:'a'*/ './components/a').then(function (e) {
    console.log(e);
})
// var app = document.getElementById('app');
// app.innerHTML = '<div class="'+ base.box +'">test</div>'

// common.use()
//
// var flag = false;
//
// setInterval(function () {
//     if(flag){
//         base.unuse()
//     }else{
//         base.use()
//     }
//     flag = !flag;
// },1000)