from typing import List

class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        lens = [min(ith[0], ith[1]) for ith in rectangles]
        maxLen = max(lens)
        return lens.count(maxLen)

s = Solution()
assert(s.countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]) == 3)
assert(s.countGoodRectangles([[2, 3], [3, 7], [4, 3], [3, 7]]) == 3)
