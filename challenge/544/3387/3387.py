from typing import List
from itertools import combinations

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subs = [[]]
        for n in range(len(nums)):
            for c in combinations(nums, n + 1):
                subs.append(list(c))

        return subs

s = Solution()
print(s.subsets([1, 2, 3])) # [[3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], []]
print(s.subsets([]))  # [[]]
