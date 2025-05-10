// 题目
/*
*JavaScript* 中对象的属性描述符有哪些？分别有什么作用？

*/

/*
参考答案：

属性描述符一共有 *6* 个，可以选择使用。

- *value*：设置属性值，默认值为 *undefined*。
- *writable*：设置属性值是否可写，默认值为 *false*。
- *enumerable*：设置属性是否可枚举，即是否允许使用 *for/in* 语句或 *Object.keys( )* 函数遍历访问，默认为 *false*。
- *configurable*：当设置为 false 时，该属性的类型不能在数据属性和访问器属性之间更改，且该属性不可被删除，且其描述符的其他属性也不能被更改（但是，如果它是一个可写的数据描述符，则 value 可以被更改，writable 可以更改为 false）。默认值为 false。
- *get*：取值函数，默认为 *undefined*。
- *set*：存值函数，默认为 *undefined*。

使用属性描述符的时候，*get* 和 *set* 以及 *value* 和 *writable* 这两组是互斥的，设置了 *get* 和 *set* 就不能设置 *value* 和 *writable*，反之设置了 *value* 和 *writable* 也就不可以设置 *get* 和 *set*。

*/