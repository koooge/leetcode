from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        res = []
        def helper(a, r):
            if not a:
                res.append(" ".join(r))
            for w in wordDict:
                if a.find(w) == 0:
                    next_res = r + []
                    next_res.append(w)
                    helper(a[len(w):], next_res)
        helper(s, [])
        return res


s = Solution()
print(s.wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])) # ["cats and dog", "cat sand dog"]
print(s.wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])) # ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]
