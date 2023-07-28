// https://leetcode.com/problems/valid-anagram

// Solution 1
// Sort then compare
// Time Complexity: O(n log n)
// Space Complexity: O(n) or O(1) depending on library function
// Check with interviewer to see what they consider sorting space complexity to be

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sortedS = s.split("").sort();
  let sortedT = t.split("").sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
};

// Solution 2
// Two hashmaps/dictionaries
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = 1 + (countS[s[i]] ?? 0);
    countT[t[i]] = 1 + (countT[t[i]] ?? 0);
  }

  let countSKeys = Object.keys(countS);

  for (let key of countSKeys) {
    if (countT[key] == null || countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
};