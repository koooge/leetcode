from typing import List

class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        arr = [first]

        for i in range(len(encoded)):
            arr.append(encoded[i] ^ arr[i])

        return arr

s = Solution()
assert(s.decode([1, 2, 3], 1) == [1, 0, 2, 1])
assert(s.decode([6, 2, 7, 3], 4) == [4, 2, 0, 7, 4])
