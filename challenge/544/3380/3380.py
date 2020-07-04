class Solution:
    def nthUglyNumber(self, n: int) -> int:
        i = 1
        for num in range(1, 1690):
            if num % 2 == 0 or num % 3 == 0 or num % 5 == 0:
                i += 1
            if i == n:
                return num

s = Solution()
print(s.nthUglyNumber(1)) # 1
print(s.nthUglyNumber(2)) # 2
print(s.nthUglyNumber(3)) # 3
print(s.nthUglyNumber(11)) # 15 ??
