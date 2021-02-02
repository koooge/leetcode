from typing import List

class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        discounts = []

        for i in range(len(prices)):
            for jth in prices[i+1:]:
                if jth <= prices[i]:
                    discounts.append(prices[i] - jth)
                    break
            if len(discounts) <= i:
                discounts.append(prices[i])

        return discounts

s = Solution()
assert(s.finalPrices([8, 4, 6, 2, 3]) == [4, 2, 4, 2, 3])
assert(s.finalPrices([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5])
assert(s.finalPrices([10, 1, 1, 6]) == [9, 0, 1, 6])
