/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 如果数组长度小于等于1，不需要跳跃
  if (nums.length <= 1) return 0;

  // curEnd：当前覆盖范围的末尾
  let curEnd = 0;
  // maxReach：下一步能达到的最远位置
  let maxReach = 0;
  // jumps：跳跃次数
  let jumps = 0;

  // 遍历数组（不需要访问最后一个元素，因为已经到达目标）
  for (let i = 0; i < nums.length - 1; i++) {
    // 更新从当前位置能达到的最远位置
    maxReach = Math.max(maxReach, i + nums[i]);

    // 如果到达当前覆盖范围的末尾
    if (i === curEnd) {
      // 必须进行一次跳跃
      jumps++;
      // 更新当前覆盖范围的末尾为下一步能达到的最远位置
      curEnd = maxReach;

      // 如果已经能够到达最后一个位置，就不需要再跳了
      if (curEnd >= nums.length - 1) {
        return jumps;
      }
    }
  }

  return jumps;
};
// @lc code=end
