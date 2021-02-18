from typing import List

class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        thirds = []
        s = text.split()
        for i in range(len(s) - 2):
            if s[i] == first and s[i + 1] == second:
                thirds.append(s[i + 2])

        return thirds

s = Solution()
assert(s.findOcurrences("alice is a good girl she is a good student", "a", "good") == ["girl","student"])
assert(s.findOcurrences("we will we will rock you", "we", "will") == ["we","rock"])
