// 题目
/*

useMemo 和 useCallback 的区别及使用场景?
*/

/*
在 useCallback 内部，会将函数和依赖项一起缓存到 hook 对象的 memoizedState 属性上，在组件更新阶段，首先会拿到之前的 hook 对象，从之前的 hook 对象的 memoizedState 属性上获取到之前的依赖项目，对比依赖项目是否相同，如果相同返回之前的 callback，否则就重新缓存，然后返回新的 callback。

在 useMemo 内部，会将传入的函数执行并得到计算值，将计算值和依赖项目存储到 hook 对象的 memoizedState 上面，最后向外部返回计算得到的值。更新的时候首先是从 updateWorkInProgressHook 上拿到之前的 hook 对象，从而获取到之前的依赖值，和新传入的依赖进行一个对比，如果相同，就返回上一次的计算值，否则就重新调用传入的函数得到新的计算值并缓存，最后向外部返回新的计算值。

*/
