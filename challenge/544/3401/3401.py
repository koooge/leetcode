from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        return min(nums)

s = Solution()
print(s.findMin([1, 3, 5])) # 1
print(s.findMin([2, 2, 2, 0, 1])) # 0
