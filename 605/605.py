from typing import List

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if len(flowerbed) == 1:
            if flowerbed[0] == 0: n -= 1
            return n <= 0

        if flowerbed[0] == 0 and flowerbed[1] == 0:
            flowerbed[0] = 1
            n -= 1

        i = 1
        while i < len(flowerbed) - 1:
            if flowerbed[i - 1] == 0 and flowerbed[i] == 0 and flowerbed[i + 1] == 0:
                flowerbed[i] = 1
                n -= 1
                if n <= 0: break
                i += 1

            i += 1

        if flowerbed[-2] == 0 and flowerbed[-1] == 0: n -= 1

        return n <= 0

s = Solution()
assert(s.canPlaceFlowers([1, 0, 0, 0, 1], 1) == True)
assert(s.canPlaceFlowers([1, 0, 0, 0, 1], 2) == False)
assert(s.canPlaceFlowers([1, 0, 0, 0, 0, 1], 2) == False)
assert(s.canPlaceFlowers([0, 0, 1, 0, 1], 1) == True)
assert(s.canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2) == True)
assert(s.canPlaceFlowers([1], 0) == True)
assert(s.canPlaceFlowers([0, 0, 1, 0, 0], 1) == True)
assert(s.canPlaceFlowers([0, 0], 2) == False)
