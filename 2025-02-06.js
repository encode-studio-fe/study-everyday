// 题目
/*
买卖股票的最佳时机
https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
*/



// 贪心
var maxProfit = function (prices) {
  let low = Infinity
  let ret = 0
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i])
    ret = Math.max(ret, prices[i] - low)
  }
  return ret
}

// 动态规划
// dp[i] = [ 持有股票所得的最多的现金， 不持有股票所得的最多的现金 ]

var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill([0, 0])
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    ]
  }
  return dp[prices.length - 1][1]
}
// @lc code=end
