// 题目
/*
说一下 webpack 中的几种 hash 的实现原理是什么？

*/

/*
hash
hash 是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的 hash 值都会更改，并且全部文件都共用相同的 hash 值
chunkhash
每个打包过程单独的 hash 值，如果一个项目有多个 entry，则每个 entry 维护自己的 chunkhash。
contenthash
每个文件内容单独的 hash 值，它和打包结果文件内容有关，只要文件内容不变，contenthash 不变。
*/
