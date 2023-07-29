class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numIndexDict = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in numIndexDict:
                return [numIndexDict[diff], i]
            numIndexDict[n] = i
