from typing import List
import collections

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        return int(sum(k * (k - 1) / 2 for k in collections.Counter(nums).values()))


s = Solution()
assert(s.numIdenticalPairs([1, 2, 3, 1, 1, 3]) == 4)
assert(s.numIdenticalPairs([1, 1, 1, 1]) == 6)
assert(s.numIdenticalPairs([1, 2, 3]) == 0)
