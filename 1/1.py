from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums) - 1 - i):
                if nums[i] + nums[i + 1 + j] == target:
                    return [i, i + 1 + j]

print(Solution().twoSum([2, 7, 11, 15], 9)) # [0, 1]
print(Solution().twoSum([3, 2, 4], 6)) # [1, 2]
print(Solution().twoSum([-1,-2,-3,-4,-5], -8)) # [2, 4]
