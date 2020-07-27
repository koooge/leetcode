from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        if not inorder:
            return None

        i = inorder.index(postorder[-1])
        node = TreeNode(postorder[-1])

        node.left = self.buildTree(inorder[:i], postorder[:i])
        node.right = self.buildTree(inorder[i+1:], postorder[i:-1])

        return node

s = Solution()
print(s.buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])) # 3 => 9, 20 => 15, 7
