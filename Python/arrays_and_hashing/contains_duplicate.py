# https://leetcode.com/problems/contains-duplicate

from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
        for num in nums:
            if num in hashset:
                return True
            hashset.add(num)
        return False

solution = Solution()
print(solution.containsDuplicate([1, 2, 3, 4]))
print(solution.containsDuplicate([1, 2, 3, 2]))