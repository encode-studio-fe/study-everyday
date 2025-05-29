// 题目
/*
说一说 Vue3 响应式相较于 Vue2 是否有改变？如果有，那么说一下具体有哪些改变？

*/

/*
答案：
相比较 Vue2，Vue3 在响应式的实现方面有这么一些方面的改变：

1. 数据拦截从 Object.defineProperty 改为了 Proxy + Object.defineProperty 的拦截方式，其中
	 - ref：使用 ObjectdefineProperty + Proxy 方式
	 - reactive：使用 Proxy 方式
2. 创建响应式数据在语法层面有了变化：
	 - Vue2: 通过 data 来创建响应式数据
	 - Vue3: 通过 ref、reactvie 等方法来创建响应式数据
3. 依赖收集上面的变化
	 - Vue2：Watcher + Dep
	 - Vue3：WeakMap + Map + Set
	 - 这种实现方式可以实现更细粒度的依赖追踪和更新控制
*/