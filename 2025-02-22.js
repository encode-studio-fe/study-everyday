
// 题目
// 如何判断数组或对象


/*

1. 通过 instanceof 进行判断
var arr = [1,2,3,1];
console.log(arr instanceof Array) // true
2. 通过对象的 constructor 属性
var arr = [1,2,3,1];
console.log(arr.constructor === Array) // true
3. Object.prototype.toString.call(arr)
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call([]));//[object Array]
4. 可以通过 ES6 新提供的方法 Array.isArray( )
Array.isArray([]) //true

*/ 