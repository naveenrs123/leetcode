// https://leetcode.com/problems/remove-element/
//
// Time Complexity: O(n) (could iterate through the entire array in the worst case)
// Space Complexity: O(1) (we use a constant amount of space for pointers and result counter)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let start = 0;
  let end = nums.length - 1;
  let res = 0;

  while (start <= end) {
    if (nums[start] !== val) {
      start++;
      res++;
    } else if (nums[start] === val && nums[end] !== val) {
      nums[start] = nums[end];
      start++;
      end--;
      res++;
    } else {
      end--;
    }
  }

  return res;
};
