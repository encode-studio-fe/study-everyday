
// 题目
/*
说一说 useEffect 和 useLayoutEffect 的区别？
*/

/*
参考答案：

在 React 中，用于定义有副作用因变量的 Hook 有：

- useEffect：回调函数会在 commit 阶段完成后异步执行，所以不会阻塞视图渲染
- useLayoutEffect：回调函数会在 commit 阶段的 Layout 子阶段同步执行，一般用于执行 DOM 相关的操作

每一个 effect 会与当前 FC 其他的 effect 形成环状链表，连接方式为单向环状链表。

其中 useEffect 工作流程可以分为：

- 声明阶段
- 调度阶段
- 执行阶段

useLayoutEffect 的工作流程可以分为：

- 声明阶段
- 执行阶段

之所以 useEffect 会比 useLayoutEffect 多一个阶段，就是因为 useEffect 的回调函数会在 commit 阶段完成后异步执行，因此需要经历调度阶段。
*/ 