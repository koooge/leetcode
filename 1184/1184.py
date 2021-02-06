from typing import List

class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:
        a = min(start, destination)
        b = max(start, destination)
        return min(sum(distance[a:b]), sum(distance) - sum(distance[a:b]))

s = Solution()
assert(s.distanceBetweenBusStops([1, 2, 3, 4], 0, 1) == 1)
assert(s.distanceBetweenBusStops([1, 2, 3, 4], 0, 2) == 3)
assert(s.distanceBetweenBusStops([1, 2, 3, 4], 0, 3) == 4)
