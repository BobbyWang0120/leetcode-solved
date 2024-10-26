/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 定义快指针，扫描整个数组
  let fast = 0;
  // 定义慢指针，指向下一个要填入的位置
  let slow = 0;

  // 遍历整个数组
  while (fast < nums.length) {
    // 如果当前元素不等于val
    if (nums[fast] !== val) {
      // 将其移动到slow指向的位置
      nums[slow] = nums[fast];
      // slow指针前进
      slow++;
    }
    // fast指针始终前进
    fast++;
  }

  // 返回新数组的长度
  return slow;
};
// @lc code=end
