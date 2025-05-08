// 题目
/*

useRef 是干什么的？ref 的工作流程是怎样的？什么叫做 ref 的失控？
*/

/*
useRef 的主要作用就是用来创建 ref 保存对 DOM 元素的引用。在 React 发展过程中，出现过三种 ref 相关的引用模式：

- String 类型（已不推荐使用）
- 函数类型
- { current : T }

目前最为推荐的是在类组件中使用 createRef，函数组件中使用 useRef 来创建 Ref。

当开发者调用 useRef 来创建 ref 时，在 mount 阶段，会创建一个 hook 对象，该 hook 对象的 memoizedState 存储的是 { current: initialValue } 对象，之后向外部返回了这个对象。在 update 阶段就是从 hook 对象的 memoizedState 拿到 { current: initialValue } 对象。

ref 内部的工作流程整体上可以分为两个阶段：

- render 阶段：标记 Ref flag，对应的内部函数为 markRef
- commit 阶段：根据 Ref flag，执行 ref 相关的操作，对应的相关函数有 commitDetachRef、commitAttachRef

所谓 ref 的失控，本质是由于开发者通过 ref 操作了 DOM，而这一行为本身是应该由 React 来进行接管的，所以两者之间发生了冲突导致的。

ref 失控的防治主要体现在两个方面：

- 防：控制 ref 失控影像的范围，使 ref 失控造成的影响更容易被定位，例如使用 forwardRef
- 治：从 ref 引用的数据结构入手，尽力避免可能引起失控的操作，例如使用 useImperativeHandle

*/
