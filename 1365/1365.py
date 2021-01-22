from typing import List

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        return [*map(sorted(nums).index, nums)]

s = Solution()
assert(s.smallerNumbersThanCurrent([8, 1, 2, 2, 3]) == [4, 0, 1, 1, 3])
assert(s.smallerNumbersThanCurrent([6, 5, 4, 8]) == [2, 1, 0, 3])
assert(s.smallerNumbersThanCurrent([7, 7, 7, 7]) == [0, 0, 0, 0])
