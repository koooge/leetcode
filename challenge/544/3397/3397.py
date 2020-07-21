from typing import List
import copy

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        for i in range(len(board)):
            for j in range(len(board[i])):
                if self.__exist(board, word, i, j) == True:
                    return True

        return False

    def __exist(self, board: List[List[str]], word: str, i: int, j: int) -> bool:
        if word[0] == board[i][j]:
            if len(word) == 1:
                return True

            top = left = bottom = right = False
            b = copy.deepcopy(board)
            b[i][j] = ''
            if i > 0:
                top = self.__exist(b, word[1:], i - 1, j)
            if j > 0:
                left = self.__exist(b, word[1:], i, j - 1)
            if i < len(board) - 1:
                bottom = self.__exist(b, word[1:], i + 1, j)
            if j < len(board[0]) - 1:
                right = self.__exist(b, word[1:], i, j + 1)
            return top or left or bottom or right

        return False

s = Solution()
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
print(s.exist(board, 'ABCCED')) # True
print(s.exist(board, 'SEE')) # True
print(s.exist(board, 'ABCB'))  # False
board2 = [
  ['A','B','C','E'],
  ['S','F','E','S'],
  ['A','D','E','E']
]
print(s.exist(board2, 'ABCESEEEFS')) # True
print(s.exist([['a']], 'a')) # True
print(s.exist([['a', 'b'], ['c', 'd']], 'abcd')) # False
print(s.exist([['A', 'B', 'C'], ['H', 'G', 'D'], ['I', 'F','E']], 'ABCDEFGHI')) # True
