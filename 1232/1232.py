from typing import List

class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        dx = coordinates[1][0] - coordinates[0][0]
        dy = coordinates[1][1] - coordinates[0][1]

        if dx == 0:
            for i in range(2, len(coordinates)):
                if coordinates[i][0] != coordinates[0][0]: return False
            return True

        a = dy / dx
        b = coordinates[0][1] - a * coordinates[0][0]
        for i in range(2, len(coordinates)):
            if coordinates[i][1] != a * coordinates[i][0] + b: return False

        return True

s = Solution()
assert(s.checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]) == True)
assert(s.checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]) == False)
assert(s.checkStraightLine([[0,0],[0,1],[0,-1]]) == True)
assert(s.checkStraightLine([[2,4],[2,5],[2,8]]) == True)
assert(s.checkStraightLine([[2,1],[4,2],[6,3]]) == True)
