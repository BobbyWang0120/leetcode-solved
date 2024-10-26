/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 如果数组为空或只有一天的价格，无法交易，返回0
  if (prices.length <= 1) return 0;

  // 记录总利润
  let totalProfit = 0;

  // 遍历价格数组，从第二天开始
  for (let i = 1; i < prices.length; i++) {
    // 计算今天和昨天的价格差
    let profit = prices[i] - prices[i - 1];

    // 如果价格差大于0（今天价格比昨天高）
    // 就在昨天买入，今天卖出，赚取这个差价
    if (profit > 0) {
      totalProfit += profit;
    }
    // 如果价格差小于等于0，就不操作
  }

  // 返回总利润
  return totalProfit;
};
// @lc code=end
