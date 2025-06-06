// 题目
/*
webpack proxy 工作原理，为什么能解决跨域？
*/

/*

严格来说，webpack 只是一个打包工具，它并没有 proxy 的功能，甚至连服务器的功能都没有。之所以能够在 webpack 中使用 proxy 配置，是因为它的一个插件，即 webpack-dev-server 的能力。
所以，此题应该问做：webpack-dev-server 工作原理，为什么能解决跨域？
参考答案：
首先，proxy 配置是针对开发环境的，对生产环境没有任何意义。
当我们通过 webpack-dev-server 启动开发服务器后，所有的打包资源都可以通过访问开发服务器获得。
与此同时，我们又配置了 proxy，当我们向开发服务器请求特定的地址时，开发服务器会将其代理到目标地址。因此，后续对代理地址的请求，就可以变为直接请求开发服务器。
这样一来，我们请求静态页面的域和请求代理地址的域就同源了，因为都是请求开发服务器，所以就不会产生跨域问题。
*/
