import datetime

class Solution:
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        d1 = datetime.datetime.strptime(date1, '%Y-%m-%d')
        d2 = datetime.datetime.strptime(date2, '%Y-%m-%d')
        return abs((d1 - d2).days)

s = Solution()
assert(s.daysBetweenDates('2019-06-29', '2019-06-30') == 1)
assert(s.daysBetweenDates('2020-01-15', '2019-12-31') == 15)
