from typing import List

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        result = [0] * len(nums)

        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j: continue
                if nums[i] > nums[j]: result[i] += 1

        return result

s = Solution()
assert(s.smallerNumbersThanCurrent([8, 1, 2, 2, 3]) == [4, 0, 1, 1, 3])
assert(s.smallerNumbersThanCurrent([6, 5, 4, 8]) == [2, 1, 0, 3])
assert(s.smallerNumbersThanCurrent([7, 7, 7, 7]) == [0, 0, 0, 0])
