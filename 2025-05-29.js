// 题目
/*
如何阻止默认事件？

*/

/*
答案：
// 方法一：全支持
event.preventDefault();
// 方法二：该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。
event.returnValue = false;
// 方法三：不建议滥用，jQuery 中可以同时阻止冒泡和默认事件
return false;
*/