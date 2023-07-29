class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numIndexDict = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in numIndexDict:
                return [numIndexDict[diff], i]
            numIndexDict[nums[i]] = i
