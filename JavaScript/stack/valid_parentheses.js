// https://leetcode.com/problems/valid-parentheses/

// Solution
// Use a stack to track the parentheses
// Time Complexity: O(n)
// Space Complexity: O(n) (might end up pushing every value on to the stack)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pairs = { ')': '(', '}': '{', ']': '[' };
    let openParens = Object.values(pairs);
    let closeParens = Object.keys(pairs);

    for (let char of s) {
        if (openParens.includes(char)) {
            stack.push(char);
        }

        if (closeParens.includes(char)) {
            if (stack.at(-1) === pairs[char]) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
    }

    return stack.length === 0;
};