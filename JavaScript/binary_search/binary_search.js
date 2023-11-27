/**
 * https://leetcode.com/problems/binary-search/
 * 
 * Time Complexity: O(log n) - We chop half of the array at each iteration, so we search much less than the 
 * whole array.
 * Space Complexity: O(1) - Negligible space used by variables and no stack space wasted due to iterative 
 * approach.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let val = nums[mid];
        if (target === val) {
            return mid;
        } else if (target > val) {
            start = mid + 1;
        } else if (target < val) {
            end = mid - 1;
        }
    }

    return -1;
};