from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        maxAve = sum(nums[:k]) / k
        for i in range(1, len(nums) - (k - 1)):
            subAve = sum(nums[i:i + k]) / k
            if subAve > maxAve: maxAve = subAve
        return maxAve

s = Solution()
assert(s.findMaxAverage([1, 12, -5, -6, 50, 3], 4) == 12.75)
assert(s.findMaxAverage([-1], 1) == -1)
