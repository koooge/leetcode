from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findTarget(self, root: TreeNode, k: int) -> bool:
        values = self.__treeToArray(root)
        for i in range(len(values) - 1):
            for j in range(i + 1, len(values)):
                if values[i] + values[j] == k: return True
        return False

    def __treeToArray(self, root: TreeNode) -> List[int]:
        if root.val == None: return []

        values = [root.val]
        left = right = []

        if root.left != None:
            left = self.__treeToArray(root.left)
        if root.right != None:
            right = self.__treeToArray(root.right)

        return values + left + right

s = Solution()
assert(s.findTarget(TreeNode(5, TreeNode(3, TreeNode(2), TreeNode(4)), TreeNode(6, None, TreeNode(7))), 9) == True)
assert(s.findTarget(TreeNode(5, TreeNode(3, TreeNode(2), TreeNode(4)), TreeNode(6, None, TreeNode(7))), 28) == False)
assert (s.findTarget(TreeNode(2, TreeNode(1), TreeNode(3)), 4) == True)
assert (s.findTarget(TreeNode(2, TreeNode(1), TreeNode(3)), 1) == False)
assert (s.findTarget(TreeNode(2, TreeNode(1), TreeNode(3)), 3) == True)
