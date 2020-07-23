from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(len(nums)):
            if (nums.index(nums[i]) == i) and (len(nums) - 1 - nums[::-1].index(nums[i]) == i):
                result.append(nums[i])
        return result

s = Solution()
print(s.singleNumber([1, 2, 1, 3, 2, 5])) # [3, 5]
