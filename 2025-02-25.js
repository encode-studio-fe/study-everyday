// 题目
/*
map 和 forEach 的区别？

*/

/*
两者区别
forEach()方法不会返回执行结果，而是undefined。
也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。

适用场景
forEach适合于你并不打算改变数据的时候，而只是想用数据做一些事情 – 比如存入数据库或则打印出来。
map()适用于你要改变数据值的时候。不仅仅在于它更快，而且返回一个新的数组。这样的优点在于你可以使用复合(composition)(map, filter, reduce 等组合使用)来玩出更多的花样。

*/
