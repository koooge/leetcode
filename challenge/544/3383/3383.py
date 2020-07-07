from typing import List

class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        peri = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    peri += 4
                    if i > 0 and grid[i - 1][j] == 1:
                        peri -= 1
                    if i < len(grid) - 1 and grid[i + 1][j] == 1:
                        peri -= 1
                    if j > 0 and grid[i][j - 1] == 1:
                        peri -= 1
                    if j < len(grid[i]) - 1 and grid[i][j + 1] == 1:
                        peri -= 1
        return peri

s = Solution()
print(s.islandPerimeter([[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]])) # 16
