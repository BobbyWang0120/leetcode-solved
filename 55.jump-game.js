/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 初始化最远可以到达的位置
  let maxReach = 0;

  // 遍历数组中的每个位置
  // 注意：i <= maxReach 确保我们只遍历能够到达的位置
  for (let i = 0; i <= maxReach && i < nums.length; i++) {
    // 更新最远可达位置
    // 当前位置是i，从这个位置最多能跳nums[i]步
    // 所以从当前位置能达到的最远距离是 i + nums[i]
    maxReach = Math.max(maxReach, i + nums[i]);

    // 如果最远可达位置已经覆盖了最后一个位置
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  // 如果循环结束还没有返回true，说明无法到达最后一个位置
  return false;
};
// @lc code=end
