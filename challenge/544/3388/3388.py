class Solution:
    def reverseBits(self, n: int) -> int:
        b = bin(n)[2:].zfill(32)
        rb = b[::-1]
        return int(rb, 2)

s = Solution()
print(s.reverseBits(int('00000010100101000001111010011100', 2))) # 964176192 (00111001011110000010100101000000)
print(s.reverseBits(int('11111111111111111111111111111101', 2))) #  (10111111111111111111111111111111)

