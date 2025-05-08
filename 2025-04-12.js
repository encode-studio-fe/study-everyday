// 题目
/*
说一说 React 中的 updateQueue

*/

/*
update 是计算 state 的最小单位，一条 updateQueue 代表由 update 所组成的链表，其中几个重要的属性列举如下：

- baseState：参与计算的初始 state，update 基于该 state 计算新的 state，可以类比为心智模型中的 master 分支。
- firstBaseUpdate 与 lastBaseUpdate：表示更新前该 FiberNode 中已保存的 update，以链表的形式串联起来。链表头部为 firstBaseUpdate，链表尾部为 lastBaseUpdate。
- shared.pending：触发更新后，产生的 update 会保存在 shared.pending 中形成单向环状链表。计算 state 时，该环状链表会被拆分并拼接在 lastBaseUpdate 后面。

整个 state 的计算流程可以分为两步：

- 将 shared.pending 所指向的环状链表进行拆分并且和 baseUpdate 进行拼接，形成新的链表
- 遍历连接后的链表，根据 wipRootRenderLanes 来选定优先级，基于符合优先级条件的 update 来计算 state

*/
