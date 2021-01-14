from typing import List

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        canGreatest = []
        greatest = max(candies)
        for n in candies:
            if n + extraCandies >= greatest:
                canGreatest.append(True)
            else:
                canGreatest.append(False)
        return canGreatest

s = Solution()
assert(s.kidsWithCandies([2, 3, 5, 1, 7], 3) == [True, True, True, False, True])
assert(s.kidsWithCandies([4, 2, 1, 1, 2], 1) == [True, False, False, False, False])
assert(s.kidsWithCandies([12, 1, 12], 10) == [True, False, True])
assert(s.kidsWithCandies([2, 8, 7], 1) == [False, True, True])
