// https://leetcode.com/problems/valid-parentheses/

// Solution
// Use a stack to track the parentheses
// Time Complexity: O(n)
// Space Complexity: O(n) (might end up pushing every value on to the stack)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let pairs = { ")": "(", "}": "{", "]": "[" };
  
  for (let char of s) {
    if (char in pairs) {
      if (stack.at(-1) === pairs[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
