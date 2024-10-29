/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // 将引用次数数组从大到小排序
  citations.sort((a, b) => b - a);

  // 遍历排序后的数组
  for (let i = 0; i < citations.length; i++) {
    // 如果当前论文的引用次数小于等于当前是第几篇论文
    // 说明找到了H指数
    if (citations[i] <= i) {
      return i;
    }
  }

  // 如果循环结束都没有返回
  // 说明所有论文的引用次数都大于它们的序号
  // 此时H指数就是论文总数
  return citations.length;
};
// @lc code=end
