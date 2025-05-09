// 题目
/*
解释一下 webpack 插件的实现原理？

*/

/*
参考答案：

本质上，webpack 的插件是一个带有`apply`函数的对象。当 webpack 创建好 compiler 对象后，会执行注册插件的 apply 函数，同时将 compiler 对象作为参数传入。

在 apply 函数中，开发者可以通过 compiler 对象监听多个钩子函数的执行，不同的钩子函数对应 webpack 编译的不同阶段。当 webpack 进行到一定阶段后，会调用这些监听函数，同时将 compilation 对象传入。开发者可以使用 compilation 对象获取和改变 webpack 的各种信息，从而影响构建过程。

*/