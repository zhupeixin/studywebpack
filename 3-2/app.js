// es module
import sum from './sum';

// commonjs
var minus = require('./minus');

// amd
require(['./muti'],function (muti) {
    console.log('muti(2,3) = ',muti(2,3));
})
console.log('sum(1,2) = ',sum(1,2));
console.log('minus(1,2) = ',minus(1,2));