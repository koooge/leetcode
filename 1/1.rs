impl Solution {
  pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
      for z in 0..nums.len() {
          for y in z+1..nums.len() {
              if nums[z] == target - nums[y] {
                  return vec![z as i32, y as i32];
              }
          }
      }
      return vec![0, 0];
  }
}
