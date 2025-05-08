// 题目
/*

*Vue* 为什么没有类似于 *React* 中 *shouldComponentUpdate* 的生命周期？
*/

/*
答案：
根本原因是 *Vue* 与 *React* 的变化侦测方式有所不同

*React* 是 *pull* 的方式侦测变化，当 *React* 知道发生变化后，会使用 *Virtual Dom Diff* 进行差异检测,但是很多组件实际上是肯定不会发生变化的，这个时候需要用 *shouldComponentUpdate* 进行手动操作来减少 *diff*，从而提高程序整体的性能。

*Vue* 是 *pull+push* 的方式侦测变化的，在一开始就知道那个组件发生了变化，因此在 *push* 的阶段并不需要手动控制 *diff*，而组件内部采用的 *diff* 方式实际上是可以引入类似于 *shouldComponentUpdate* 相关生命周期的，但是通常合理大小的组件不会有过量的 *diff*，手动优化的价值有限，因此目前 *Vue* 并没有考虑引入 *shouldComponentUpdate* 这种手动优化的生命周期。
*/