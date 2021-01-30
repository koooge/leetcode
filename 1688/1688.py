class Solution:
    def numberOfMatches(self, n: int) -> int:
        if n == 1: return 0

        m = n // 2
        if n % 2 != 0:
            return m + self.numberOfMatches(m + 1)
        else:
            return m + self.numberOfMatches(m)

s = Solution()
assert(s.numberOfMatches(7) == 6)
assert(s.numberOfMatches(14) == 13)
assert(s.numberOfMatches(1) == 0)
