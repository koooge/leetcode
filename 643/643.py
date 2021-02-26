from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        subSum = maxSum = sum(nums[:k])
        for i in range(1, len(nums) - (k - 1)):
            subSum = subSum - nums[i - 1] + nums[i + k - 1]
            if subSum > maxSum: maxSum = subSum
        return maxSum / k

s = Solution()
assert(s.findMaxAverage([1, 12, -5, -6, 50, 3], 4) == 12.75)
assert(s.findMaxAverage([-1], 1) == -1)
