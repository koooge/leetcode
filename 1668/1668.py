class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        k = 1
        while word * k in sequence:
            k += 1
        return k - 1

s = Solution()
assert(s.maxRepeating("ababc", "ab") == 2)
assert(s.maxRepeating("ababc", "ba") == 1)
assert(s.maxRepeating("ababc", "ac") == 0)
assert(s.maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba") == 5)
