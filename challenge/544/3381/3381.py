class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        return bin(x ^ y)[2:].count('1')

s = Solution()
print(s.hammingDistance(1, 4)) # 2
print(s.hammingDistance(3, 1)) # 1
print(s.hammingDistance(93, 73)) # 2
