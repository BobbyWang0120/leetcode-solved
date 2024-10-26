/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 如果数组长度小于等于2，不需要处理，直接返回原长度
  if (nums.length <= 2) return nums.length;

  // 慢指针从2开始，因为前两个元素一定可以保留
  let slow = 2;

  // 快指针也从2开始
  for (let fast = 2; fast < nums.length; fast++) {
    // 检查当前数字是否可以放入：
    // 将fast位置的数字和slow-2的数字比较
    // 如果不相同，说明没有出现超过2次
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  // 返回新数组的长度
  return slow;
};
// @lc code=end
