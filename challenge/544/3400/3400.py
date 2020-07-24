from typing import List

class Solution:
    def __init__(self):
        self.path = []
        self.paths = []

    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        self.dfs(0, len(graph)-1, graph)
        return self.paths

    def dfs(self, index, destination, graph):
        self.path.append(index)
        nodes = graph[index]
        if nodes:
            for node in nodes:
                if(node == destination):
                    self.path.append(node)
                    self.paths.append(list(self.path))
                    self.path.pop(-1)
                else:
                    self.dfs(node, destination, graph)
                    self.path.pop(-1)
s = Solution()
print(s.allPathsSourceTarget([[1, 2], [3], [3], []]))  # [[0, 1, 3], [0, 2, 3]]
