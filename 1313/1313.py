from typing import List

class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        rleList = []
        for i in range(int(len(nums) / 2)):
            for j in range(nums[i * 2]):
                rleList.append(nums[i * 2 + 1])
        return rleList

s = Solution()
assert(s.decompressRLElist([1, 2, 3, 4]) == [2, 4, 4, 4])
assert(s.decompressRLElist([1, 1, 2, 3]) == [1, 3, 3])
