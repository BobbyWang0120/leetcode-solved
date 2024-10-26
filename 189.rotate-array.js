/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 处理k大于数组长度的情况，取模即可
  k = k % nums.length;

  // 如果k为0或数组长度小于2，无需旋转
  if (k === 0 || nums.length < 2) return;

  // 辅助函数：翻转数组的指定部分
  const reverse = (start, end) => {
    while (start < end) {
      // 交换首尾元素
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      // 移动指针
      start++;
      end--;
    }
  };

  // 三步翻转法
  // 1. 整体翻转
  reverse(0, nums.length - 1);

  // 2. 翻转前k个元素
  reverse(0, k - 1);

  // 3. 翻转剩余元素
  reverse(k, nums.length - 1);
};
// @lc code=end
