// 题目
/*

*typeof* 与 *instanceof* 的区别？ *instanceof* 是如何实现？
*/

/*
参考答案：

1. *typeof*

*typeof* 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 *7* 种：*number、boolean、symbol、string、object、undefined、function* 等。

2. *instanceof*

*instanceof* 是用来判断 *A* 是否为 *B* 的实例，表达式为：*A instanceof B*，如果 *A* 是 *B* 的实例，则返回 *true*,否则返回 *false*。 在这里需要特别注意的是：*instanceof* 检测的是原型。

用一段伪代码来模拟其内部执行过程：

```js
instanceof (A,B) = {
		varL = A.__proto__;
		varR = B.prototype;
		if(L === R) {
				// A的内部属性 __proto__ 指向 B 的原型对象
				return true;
		}
		return false;
}
```

从上述过程可以看出，当 *A* 的 \__*proto*__ 指向 *B* 的 *prototype* 时，就认为 *A* 就是 *B* 的实例。

需要注意的是，*instanceof* 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。

例如：*[ ] instanceof Object* 返回的也会是 *true*。

*/