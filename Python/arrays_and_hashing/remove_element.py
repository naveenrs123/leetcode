# https://leetcode.com/problems/remove-element/
#
# Time Complexity: O(n) (could iterate through the entire array in the worst case)
# Space Complexity: O(1) (we use a constant amount of space for pointers and result counter)

from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        start, end = 0, len(nums) - 1
        res = 0

        while start <= end:
            if nums[start] != val:
                start += 1
                res += 1
            elif nums[start] == val and nums[end] != val:
                nums[start] = nums[end]
                start += 1
                end -= 1
                res += 1
            else:
                end -= 1

        return res

    def removeElement2(self, nums: List[int], val: int) -> int:
        k = 0

        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1

        return k