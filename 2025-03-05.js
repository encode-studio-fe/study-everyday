// 题目
/*

为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因。
*/

/*
or 循环按顺序遍历，forEach 使用 iterator 迭代器遍历
量级越大的时候，forEach的性能远远低于for的性能
我们从语法上面来观察：
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
可以看到 forEach 是有回调的，它会按升序为数组中含有效值的每一项执行一次 callback，且除了抛出异常以外，也没有办法中止或者跳出 forEach 循环。那这样的话执行就会额外的调用栈和函数内的上下文。

而 for 循环则是底层写法，不会产生额外的消耗。

在实际业务中没有很大的数组时，for 和 forEach 的性能差距其实很小，forEach 甚至会优于 for 的时间，且更加简洁，可读性也更高，一般也会优先使用 forEach 方法来进行数组的循环处理。

*/
