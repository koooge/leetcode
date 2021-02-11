from typing import List

class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        degree = 0
        degrees = {}

        for n in nums:
            degrees[str(n)] = degrees[str(n)] + 1 if str(n) in degrees else 1
            degree = max(degrees[str(n)], degree)

        shortest = len(nums)
        for k, v in degrees.items():
            if v != degree: continue
            subLen = (len(nums) - nums[::-1].index(int(k))) - nums.index(int(k))
            shortest = min(subLen, shortest)
        return shortest

s = Solution()
assert(s.findShortestSubArray([1, 2, 2, 3, 1]) == 2)
assert(s.findShortestSubArray([1, 2, 2, 3, 1, 4, 2]) == 6)
