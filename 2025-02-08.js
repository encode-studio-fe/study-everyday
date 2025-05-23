// 题目
/**
 买卖股票的最佳时机 II
https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心
var maxProfit1 = function (prices) {
	let ret = 0
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - prices[i - 1] > 0) {
			ret += prices[i] - prices[i - 1]
		}
	}
	return ret
};




var maxProfit = function (prices) {
	let len = prices.length

	// dp[i] = [第i天持有股票的钱，不持有股票的钱]
	// 初始状态
	let has = -prices[0]
	let notHas = 0

	for (let i = 1; i < len; i++) {
		has = Math.max(has, notHas - prices[i])
		notHas = Math.max(notHas, has + prices[i])
	}
	return notHas
};