/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 从后往前遍历的三个指针
  let p1 = m - 1; // nums1有效数字的末尾指针
  let p2 = n - 1; // nums2的末尾指针
  let p = m + n - 1; // nums1数组的末尾指针(包含0的位置)

  // 从后往前遍历，直到有一个数组的指针小于0
  while (p2 >= 0) {
    // 只要nums2还有数字要处理
    // 如果nums1的指针有效 且 当前nums1的数字大于nums2的数字
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]; // 把nums1的数字放到后面
      p1--; // nums1指针向前移动
    } else {
      nums1[p] = nums2[p2]; // 把nums2的数字放到后面
      p2--; // nums2指针向前移动
    }
    p--; // 存储位置指针向前移动
  }
};
// @lc code=end
