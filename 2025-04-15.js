
// 题目
/*
composition api相比于option api有哪些优势？
*/

/*
参考答案：
从两个方面回答：
1. 为了更好的逻辑复用和代码组织
2. 更好的类型推导
有了composition api，配合reactivity api，可以在组件内部进行更加细粒度的控制，使得组件中不同的功能高度聚合，提升了代码的可维护性。对于不同组件的相同功能，也能够更好的复用。
相比于option api，composition api中没有了指向奇怪的this，所有的api变得更加函数式，这有利于和类型推断系统比如TS深度配合。
*/ 