import math

class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        mod = 1000000007
        arr = [-1] * (n + 1)
        count = 0

        for i in range(2, n + 1):
            if arr[i] == -1:
                count += 1

                for j in range(i * i, n + 1, i):
                    arr[j] = 1

        return ((math.factorial(n - count) % mod) * (math.factorial(count) % mod)) % mod

s = Solution()
assert(s.numPrimeArrangements(5) == 12)
assert(s.numPrimeArrangements(100) == 682289015)
