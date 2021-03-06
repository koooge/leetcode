class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self):
        self.maxDepth = 0
        self.maxWidth = 0
        self.map = {}

    def widthOfBinaryTree(self, root: TreeNode) -> int:
        self.toArray(root, 0, 0)
        for i in range(self.maxDepth + 1):
            d = self.map[str(i)]
            width = max(d) - min(d) + 1
            self.maxWidth = width if width > self.maxWidth else self.maxWidth
        return self.maxWidth

    def toArray(self, root, depth, pos) -> int:
        if root == None:
            return

        if str(depth) not in self.map:
            self.map[str(depth)] = []
        self.map[str(depth)].append(pos - pow(2, depth) + 1)
        self.maxDepth = depth if depth > self.maxDepth else self.maxDepth

        self.toArray(root.left, depth + 1, pos * 2 + 1)
        self.toArray(root.right, depth + 1, pos * 2 + 2)

s1 = Solution()
print(s1.widthOfBinaryTree(TreeNode(1, TreeNode(3, TreeNode(5), TreeNode(3)), TreeNode(2, None, TreeNode(9))))) # 4
s2 = Solution()
print(s2.widthOfBinaryTree(TreeNode(1, TreeNode(3, TreeNode(5), TreeNode(3))))) # 2
s3 = Solution()
print(s3.widthOfBinaryTree(TreeNode(1, TreeNode(3, TreeNode(5)), TreeNode(2)))) # 2
s4 = Solution()
print(s4.widthOfBinaryTree(TreeNode(1, TreeNode(3, TreeNode(5, TreeNode(6))), TreeNode(2, None, TreeNode(9, None, TreeNode(7)))))) # 8
s5 = Solution()
print(s5.widthOfBinaryTree(TreeNode(1))) # 1
