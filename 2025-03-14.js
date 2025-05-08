// 题目
/*
webpack 中的 loader 属性和 plugins 属性的区别是什么？

*/

/*
它们都是 webpack 功能的扩展点。
loader 是加载器，主要用于代码转换，比如 JS 代码降级，CSS 预编译、模块化等
plugins 是插件，webpack 打包流程中每个环节都提供了钩子函数，可以利用这些钩子函数参与到打包生命周期中，更改或增加 webpack 的某些功能，比如生成页面和 css 文件、压缩打包结果等

*/
