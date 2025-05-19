# https://leetcode.com/problems/majority-element/
#
# Boyer-Moore Voting Algorithm
# Time Complexity: O(n) (need to iterate through the whole array)
# Space Complexity: O(1) (constant space for a few variables)

from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        res = count = 0

        for num in nums:
            if count == 0:
                res = num
            count += (1 if num == res else -1)
        return res
