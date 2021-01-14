from typing import List

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        greatest = max(candies)
        return [candy + extraCandies >= greatest for candy in candies]

s = Solution()
assert(s.kidsWithCandies([2, 3, 5, 1, 3], 3) == [True, True, True, False, True])
assert(s.kidsWithCandies([4, 2, 1, 1, 2], 1) == [True, False, False, False, False])
assert(s.kidsWithCandies([12, 1, 12], 10) == [True, False, True])
assert(s.kidsWithCandies([2, 8, 7], 1) == [False, True, True])
