// 题目
/*
为什么 Vue3 中去掉了 Vue 构造函数？

*/

/*
Vue2 的全局构造函数带来了诸多问题：

1. 调用构造函数的静态方法会对所有vue应用生效，不利于隔离不同应用
2. Vue2 的构造函数集成了太多功能，不利于 tree shaking，Vue3 把这些功能使用普通函数导出，能够充分利用 tree shaking 优化打包体积
3. Vue2 没有把组件实例和 Vue 应用两个概念区分开，在 Vue2 中，通过 new Vue 创建的对象，既是一个 Vue 应用，同时又是一个特殊的 Vue 组件。Vue3 中，把两个概念区别开来，通过 createApp 创建的对象，是一个 Vue 应用，它内部提供的方法是针对整个应用的，而不再是一个特殊的组件。

*/
