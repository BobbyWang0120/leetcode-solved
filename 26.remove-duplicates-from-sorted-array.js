/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 如果数组为空，直接返回0
  if (nums.length === 0) return 0;

  // 慢指针，指向当前已确认不重复的最后一个元素
  let slow = 0;

  // 快指针，从1开始向前探索寻找不同的元素
  for (let fast = 1; fast < nums.length; fast++) {
    // 当找到一个与慢指针指向的值不同的元素时
    if (nums[fast] !== nums[slow]) {
      // 慢指针前进一步
      slow++;
      // 将这个不同的元素放到慢指针的位置
      nums[slow] = nums[fast];
    }
  }

  // 返回新数组的长度（slow + 1，因为slow是从0开始的索引）
  return slow + 1;
};
// @lc code=end
