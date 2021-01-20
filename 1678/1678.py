class Solution:
    def interpret(self, command: str) -> str:
        return command.replace('()', 'o').replace('(al)', 'al')

s = Solution()
assert(s.interpret('G()(al)') == 'Goal')
assert(s.interpret('G()()()()(al)') == 'Gooooal')
assert(s.interpret('(al)G(al)()()G') == 'alGalooG')
