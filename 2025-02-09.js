// 题目
/**
跳跃游戏
https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var canJump = function (nums) {
	let cover = 0
	for (let i = 0; i <= cover; i++) {
		cover = Math.max(cover, i + nums[i])
		if (cover >= nums.length - 1) {
			return true
		}
	}
	return false
};