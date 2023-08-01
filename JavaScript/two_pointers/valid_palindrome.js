// Solution 1: Two Pointers with RegExp
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        if (s[start] != s[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

// Solution 2: Reverse The String and Compare

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return s.split('').reverse().join('') === s;
};
