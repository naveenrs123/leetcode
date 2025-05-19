# https://leetcode.com/problems/concatenation-of-array/

# Time Complexity: O(n)
# Space Complexity: O(n)

from typing import List

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        numsLength = len(nums)
        for i in range(2 * numsLength):
            result.append(nums[i % numsLength])
        return result

    # Alternative
    def getConcatenation2(self, nums: List[int]) -> List[int]:
        return nums + nums

    # Alternative
    def getConcatenation3(self, nums: List[int]) -> List[int]:
        res=[0]*(len(nums)*2)
        for i in range(len(nums)):
            res[i]=res[i+len(nums)]=nums[i]
        return res
