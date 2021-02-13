class Solution:
    def makeGood(self, s: str) -> str:
        stack = [s[0]]

        for i in s[1:]:
            if stack and abs(ord(i) - ord(stack[-1])) == 32:
                stack.pop()
            else:
                stack.append(i)

        return "".join(stack)


s = Solution()
assert(s.makeGood("leEeetcode") == "leetcode")
assert(s.makeGood("abBAcC") == "")
assert(s.makeGood("s") == "s")
assert(s.makeGood("Pp") == "")
assert(s.makeGood("mC") == "mC")
