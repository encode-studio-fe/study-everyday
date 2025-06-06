
// 题目
// JavaScript中执行上下文和执行栈是什么？


/*


执行上下文
简单的来说，执行上下文是一种对Javascript代码执行环境的抽象概念，也就是说只要有Javascript代码运行，那么它就一定是运行在执行上下文中
执行上下文的类型分为三种：
- 全局执行上下文：只有一个，浏览器中的全局对象就是 window对象，this 指向这个全局对象
- 函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
- Eval 函数执行上下文： 指的是运行在 eval 函数中的代码，很少用而且不建议使用

执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 回收阶段
创建阶段
创建阶段即当函数被调用，但未执行任何其内部代码之前
创建阶段做了三件事：
- 确定 this 的值，也被称为 This Binding
- LexicalEnvironment（词法环境） 组件被创建
- VariableEnvironment（变量环境） 组件被创建

词法环境
词法环境有两个组成部分：
- 全局环境：是一个没有外部环境的词法环境，其外部环境引用为null，有一个全局对象，this 的值指向这个全局对象
- 函数环境：用户在函数中定义的变量被存储在环境记录中，包含了arguments 对象，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境

变量环境
变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性
在 ES6 中，词法环境和变量环境的区别在于前者用于存储函数声明和变量（ let 和 const ）绑定，而后者仅用于存储变量（ var ）绑定

执行阶段在这阶段，执行变量赋值、代码执行
如果 Javascript 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 undefined 值

回收阶段执行上下文出栈等待虚拟机回收执行上下文

执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文

当Javascript引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中
每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中
引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文



*/ 