from typing import List

class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        longest = keysPressed[0]
        t = releaseTimes[0]

        for i in range(1, len(releaseTimes)):
            duration = releaseTimes[i] - releaseTimes[i - 1]
            if duration > t or duration == t and keysPressed[i] > longest:
                longest = keysPressed[i]
                t = duration

        return longest


s = Solution()
assert(s.slowestKey([9, 29, 49, 59], 'cbcd') == 'c')
assert(s.slowestKey([12, 23, 36, 46, 62], 'spuda') == 'a')
