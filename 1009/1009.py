class Solution:
    def bitwiseComplement(self, N: int) -> int:
        bitwise = ''
        for b in bin(N)[2:]:
            bitwise += '0' if b == '1' else '1'
        return int(bitwise, 2)

s = Solution()
assert(s.bitwiseComplement(5) == 2)
assert(s.bitwiseComplement(7) == 0)
assert(s.bitwiseComplement(10) == 5)
