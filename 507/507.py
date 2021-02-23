class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1: return False

        sq = int(num ** 0.5)
        res = 1
        for n in range(2, sq + 1):
            if not num % n:
                res += n
                d = num // n
                if d != n: res += d

        return res == num

s = Solution()
assert(s.checkPerfectNumber(28) == True)
assert(s.checkPerfectNumber(6) == True)
assert(s.checkPerfectNumber(496) == True)
assert(s.checkPerfectNumber(8128) == True)
assert(s.checkPerfectNumber(2) == False)
