from typing import List

class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        target = []

        for i in range(len(nums)):
            target.insert(index[i], nums[i])

        return target

s = Solution()
assert(s.createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]) == [0, 4, 1, 3, 2])
assert(s.createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]) == [0, 1, 2, 3, 4])
assert(s.createTargetArray([1], [0]) == [1])
