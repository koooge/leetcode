from typing import List

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        max = 0
        for account in accounts:
            wealth = sum(account)
            if wealth > max: max = wealth
        return max

s = Solution()
assert(s.maximumWealth([[1, 2, 3], [3, 2, 1]]) == 6)
assert(s.maximumWealth([[1, 5], [7, 3], [3, 5]]) == 10)
assert(s.maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]) == 17)
