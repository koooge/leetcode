from dataclasses import dataclass
from typing import List, Dict, Union
from collections import defaultdict, deque

@dataclass
class Node:
    value: int = None
    next: "Node" = None


class Graph:
    def __init__(self):
        self.edge_list: Dict[int, Union[Node, None]] = defaultdict(lambda: None)
        self.in_degrees: Dict[int, int] = {}  # number of edges into a node as {node value: count}

    def insert_edge(self, from_vertex: int, to_vertex: int) -> None:
        new_node = Node(to_vertex, self.edge_list[from_vertex])
        self.edge_list[from_vertex] = new_node
        self.in_degrees[from_vertex] = self.in_degrees.get(from_vertex, 0)
        self.in_degrees[to_vertex] = self.in_degrees.get(to_vertex, 0) + 1

    def add_vertices(self, number: int) -> None:
        for n in range(number):
            self.in_degrees[n] = 0

    def add_edges(self, class_list: List[List[int]]) -> None:
        for to_class, from_class in class_list:
            self.insert_edge(from_class, to_class)


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        if not prerequisites:
            # just do them in order!
            return [_ for _ in range(numCourses)]

        graph = Graph()
        graph.add_vertices(numCourses)
        graph.add_edges(prerequisites)

        queue = deque([vertex for vertex, count in graph.in_degrees.items() if count == 0])

        top_sorted = []

        while queue:
            vertex: int = queue.popleft()

            successor: Node = graph.edge_list[vertex]
            while successor:
                value = successor.value
                graph.in_degrees[value] = graph.in_degrees.get(value) - 1
                if graph.in_degrees.get(value) == 0:
                    queue.append(value)
                successor = successor.next

            top_sorted.append(vertex)

        if len(top_sorted) < numCourses:
            # there was a cycle
            return []
        return top_sorted

s = Solution()
print(s.findOrder(2, [[1, 0]])) # [0, 1]
print(s.findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])) # [0, 1, 2, 3] or [0, 2, 1, 3]
print(s.findOrder(2, [[0, 1]])) # [1, 0]
