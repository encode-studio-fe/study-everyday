// 题目
/*

讲下*JS*的垃圾回收站机制
*/

/*
参考答案：

*JS* 具有自动垃圾回收机制。垃圾收集器会按照固定的时间间隔周期性的执行。

*JS* 常见的垃圾回收方式：标记清除、引用计数方式。

1、标记清除方式：

- 工作原理：当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。

- 工作流程：

 - 垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记；

 - 去掉环境中的变量以及被环境中的变量引用的变量的标记；

 - 被加上标记的会被视为准备删除的变量；

 - 垃圾回收器完成内存清理工作，销毁那些带标记的值并回收他们所占用的内存空间。

2、引用计数方式：

- 工作原理：跟踪记录每个值被引用的次数。

- 工作流程：

 - 声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是 *1*；

 - 同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1；

 - 当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减 *1*；

 - 当引用次数变成 *0* 时，说明没办法访问这个值了；

 - 当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。
*/