from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        num = int(''.join(str(n) for n in digits)) + 1
        return list(map(int, list(str(num))))

s = Solution()
print(s.plusOne([1, 2, 3])) # [1, 2, 4]
print(s.plusOne([4, 3, 2, 1])) # [4, 3, 2, 2]
