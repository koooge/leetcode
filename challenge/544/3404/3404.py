from typing import List

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        dic = {}
        least = len(tasks)

        for task in tasks:
            dic[task] = dic[task] + 1 if task in dic else 1
            if n > 0 and dic[task] % n == 0: least += 1

        return least

s = Solution()
print(s.leastInterval(["A","A","A","B","B","B"], 2)) # 8
print(s.leastInterval(["A","A","A","B","B","B"], 0)) # 6
print(s.leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)) # 16
