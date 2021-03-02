from typing import List

class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        return sum(all(abs(a - b) > d for b in arr2) for a in arr1)

s = Solution()
assert(s.findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2) == 2)
assert(s.findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3) == 2)
assert(s.findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6) == 1)
