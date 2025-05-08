// 题目
/*

说一下 promise 和 async 和 await 什么关系
*/

/*
await 表达式会造成异步函数停止执行并且等待promise的解决，当值被resolved，异步函数会恢复执行以及返回resolved值。如果该值不是一个promise，它将会被转换成一个resolved后的promise。如果promise被rejected，await 表达式会抛出异常值。

*/
