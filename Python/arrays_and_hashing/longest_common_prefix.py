# https://leetcode.com/problems/longest-common-prefix/

# Time Complexity: O(nm) where n is average length of strings and m is number of strings
# Space Complexity O(n) since prefix could be as long as a single string

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = []

        for i in range(len(strs[0])):
            for j in range(len(strs)):
                if i == len(strs[j]) or strs[0][i] != strs[j][i]:
                    return "".join(res)
            res.append(strs[0][i])

        return "".join(res)
