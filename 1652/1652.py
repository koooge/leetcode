from typing import List

class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        decrypted = [0] * len(code)
        if k < 0: code.reverse()

        for i in range(len(code)):
            for n in range(abs(k)):
                j = (i + n + 1) % len(code)
                decrypted[i] += code[j]

        if k < 0: decrypted.reverse()

        return decrypted

s = Solution()
assert(s.decrypt([5, 7, 1, 4], 3) == [12, 10, 16, 13])
assert(s.decrypt([1, 2, 3, 4], 0) == [0, 0, 0, 0])
assert(s.decrypt([2, 4, 9, 3], -2) == [12, 5, 6, 13])
