from functools import reduce

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        nums = [int(x) for x in str(n)]
        return reduce((lambda x, y: x * y), nums) - sum(nums)

s = Solution()
assert(s.subtractProductAndSum(234) == 15)
assert(s.subtractProductAndSum(4421) == 21)
