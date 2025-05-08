// 题目
/*

promise.all 方法的使用场景？数组中必须每一项都是 promise 对象吗？不是 promise 对象会如何处理 ？
*/

/*
promise.all(promiseArray) 方法是 promise 对象上的静态方法，该方法的作用是将多个 promise 对象实例包装，生成并返回一个新的 promise 实例。
此方法在集合多个 promise 的返回结果时很有用。
返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定。

promise.all 的特点
接收一个Promise实例的数组或具有Iterator接口的对象
如果元素不是Promise对象，则使用Promise.resolve转成Promise对象
如果全部成功，状态变为resolved，返回值将组成一个数组传给回调
只有有一个失败，状态就变为 rejected，返回值将直接传递给回调 *all( )*的返回值，也是新的promise 对象

*/
