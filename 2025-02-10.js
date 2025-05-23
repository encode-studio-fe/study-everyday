// 题目
/**
跳跃游戏
https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var jump = function (nums) {
	let curIndex = 0
	let nextIndex = 0
	let step = 0
	for (let i = 0; i < nums.length - 1; i++) {
		nextIndex = Math.max(nums[i] + i, nextIndex)
		if (i === curIndex) {
			curIndex = nextIndex;
			step++
		}
	}

	return step
};