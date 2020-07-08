from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # timsort: O(nlogn)
        nums.sort()

        # Stored val: Really fast
        n = len(nums)

        # Memory alloc: Fast
        solutions = []

        # O(n) for enumerate
        for i, num in enumerate(nums):
            if i > n - 3:
                break

            left, right = i+1, n-1

            # O(1/2k) where k is n-i? Not 100% sure about this one
            while left < right:
                s = num + nums[left] + nums[right]  # check if current sum is 0
                if s == 0:
                    new_solution = [num, nums[left], nums[right]]
                    # add to the solution set only if this triplet is unique

                    # O(n) for not in
                    if new_solution not in solutions:
                        solutions.append(new_solution)
                    right -= 1
                    left += 1
                elif s > 0:
                    right -= 1
                else:
                    left += 1

        return solutions

s = Solution()
print(s.threeSum([-1,0,1,2,-1,-4]))
