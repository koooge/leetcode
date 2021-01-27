from typing import List

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return ''.join(word1) == ''.join(word2)

s = Solution()
assert(s.arrayStringsAreEqual(["ab", "c"], ["a", "bc"]) == True)
assert(s.arrayStringsAreEqual(["a", "cb"], ["ab", "c"]) == False)
assert(s.arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]) == True)
