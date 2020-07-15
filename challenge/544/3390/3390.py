class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        hourPureAngle = hour * 30 if hour < 12 else 0
        minuteAngle = minutes * 6
        hourAddAngle = 30 * (minutes / 60)

        hourAngle = hourPureAngle + hourAddAngle
        angle = abs(hourAngle - minuteAngle)
        return angle if angle < 180 else 360 - angle

s = Solution()
print(s.angleClock(12, 30))  # 165
print(s.angleClock(3, 30))  # 75
print(s.angleClock(3, 15))  # 7.5
print(s.angleClock(4, 50))  # 155
print(s.angleClock(12, 0))  # 0
print(s.angleClock(1, 57))  # 76.5
