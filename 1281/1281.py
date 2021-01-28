class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        nums = [int(x) for x in str(n)]
        m = 1
        for i in nums:
            m = m * i
        return m - sum(nums)

s = Solution()
assert(s.subtractProductAndSum(234) == 15)
assert(s.subtractProductAndSum(4421) == 21)
