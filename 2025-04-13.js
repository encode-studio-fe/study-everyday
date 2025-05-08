
// 题目
/*
useState 和 useReducer 有什么样的区别？
*/

/*

参考答案：

useState 本质上就是一个简易版的 useReducer。

在 mount 阶段，两者之间的区别在于：

- useState 的 lastRenderedReducer 为 basicStateReducer
- useReducer 的 lastRenderedReducer 为传入的 reducer 参数

所以，useState 可以视为 reducer 参数为 basicStateReducer 的 useReducer

在 update 阶段，updateState 内部直接调用的就是 updateReducer，传入的 reducer 仍然是 basicStateReducer。

*/ 