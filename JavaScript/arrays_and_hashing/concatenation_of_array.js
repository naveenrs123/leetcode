// https://leetcode.com/problems/concatenation-of-array/

// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let res = [];
  const length = nums.length;
  for (let i = 0; i < 2 * length; i++) {
    res.push(nums[i % length]);
  }
  return res;
};

// Alternative
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const secondNums = nums;
  return nums.concat(secondNums);
};

// Alternative
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};
