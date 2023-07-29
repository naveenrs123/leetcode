// Optimized Solution
// Hash table to check the difference
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numIndexDict = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in numIndexDict) {
      return [numIndexDict[diff], i];
    }

    numIndexDict[nums[i]] = i;
  }
};
