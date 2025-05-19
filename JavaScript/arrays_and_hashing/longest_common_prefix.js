// https://leetcode.com/problems/longest-common-prefix/

// Time Complexity: O(nm) where n is average length of strings and m is number of strings
// Space Complexity O(n) since prefix could be as long as a single string

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const res = [];

  for (let i = 0; i < strs[0].length; i++) {
    for (const s of strs) {
      if (i === s.length || strs[0][i] != s[i]) {
        return res.join("");
      }
    }
    res.push(strs[0][i]);
  }

  return res.join("");
};

// Alternative
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 1;
  let pref = strs[0];
  while (i < strs.length) {
    if (!strs[i].startsWith(pref)) {
      pref = pref.slice(0, -1);
    } else {
      i++;
    }
  }
  return pref;
};
