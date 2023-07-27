// https://leetcode.com/problems/contains-duplicate/



// Hash Map Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {};
    for (let num of nums) {
        if (dict[num] >= 1) {
            return true;
        }

        dict[num] = 1;
    } 
    return false;
};

// Hash Set Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 4, 4]))
console.log(containsDuplicate([1, 2, 3]))