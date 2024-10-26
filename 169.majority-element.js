/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 候选人（相当于台上的人）
  let candidate = null;
  // 计票数（相当于当前候选人的分数）
  let count = 0;

  // 遍历数组，相当于处理每一张选票
  for (let num of nums) {
    // 如果计票数为0，说明需要新的候选人
    if (count === 0) {
      // 当前数字成为候选人
      candidate = num;
      // 初始得一分
      count = 1;
    }
    // 当前票数与候选人相同，得分+1
    else if (num === candidate) {
      count++;
    }
    // 当前票数与候选人不同，失去一分
    else {
      count--;
    }
  }

  // 由于题目保证多数元素一定存在
  // 所以最后留下的candidate必定是多数元素
  return candidate;
};
// @lc code=end
