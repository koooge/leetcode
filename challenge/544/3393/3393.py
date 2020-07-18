from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d = {}
        for num in nums:
            el = str(num)
            d[el] = d[el] + 1 if d[el] != None else 1

        print(d)
        result = []
        for i in range(k):
            result[i] = max(d.values())
            del d[result[i]]

s = Solution()
print(s.topKFrequent([1, 1, 1, 2, 2, 3], 2)) # [1, 2]
print(s.topKFrequent([1], 1)) # [1]
