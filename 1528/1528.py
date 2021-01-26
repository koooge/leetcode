from typing import List

class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        return ''.join(c for _, c in sorted(zip(indices, s)))

s = Solution()
assert(s.restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]) == 'leetcode')
assert(s.restoreString('abc', [0, 1, 2]) == 'abc')
assert(s.restoreString('aiohn', [3, 1, 4, 2, 0]) == 'nihao')
assert(s.restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]) == 'arigatou')
assert(s.restoreString('art', [1, 0, 2]) == 'rat')
