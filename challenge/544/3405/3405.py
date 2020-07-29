import sys
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2: return 0
        elif len(prices) == 2: return max(0, prices[1] - prices[0])

        empty = 0
        own = -sys.maxsize - 1
        resting = 0

        for p in prices:
            emptyToday = max(empty, resting)
            ownToday = max(own, empty - p)
            restingToday = own + p
            empty = emptyToday
            own = ownToday
            resting = restingToday

        return max(resting, empty)

s = Solution()
print(s.maxProfit([1, 2, 3, 0, 2])) # 3
print(s.maxProfit([1, 2])) # 1
print(s.maxProfit([])) # 0
print(s.maxProfit([1, 2, 4])) # 3
print(s.maxProfit([2, 1, 4])) # 3
print(s.maxProfit([2, 4, 1])) # 2


