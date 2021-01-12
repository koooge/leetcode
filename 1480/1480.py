from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sums = nums[:]

        for i in range(1, len(nums)):
            sums[i] = sums[i - 1] + nums[i]

        return sums

s = Solution()
assert(s.runningSum([1, 2, 3, 4]) == [1, 3, 6, 10])
assert(s.runningSum([1, 1, 1, 1, 1]) == [1, 2, 3, 4, 5])
assert(s.runningSum([3, 1, 2, 10, 1]) == [3, 4, 6, 16, 17])
