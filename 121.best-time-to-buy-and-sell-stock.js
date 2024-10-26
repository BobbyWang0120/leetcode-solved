/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 如果数组为空或只有一个元素，无法交易，返回0
  if (prices.length <= 1) return 0;

  // 记录遍历过程中遇到的最低价格
  let minPrice = prices[0];
  // 记录可能获得的最大利润
  let maxProfit = 0;

  // 遍历价格数组
  for (let i = 1; i < prices.length; i++) {
    // 更新历史最低价格
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // 计算如果今天卖出能获得的利润
    let currentProfit = prices[i] - minPrice;
    // 更新最大利润
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }

  // 返回最大利润
  return maxProfit;
};
// @lc code=end
