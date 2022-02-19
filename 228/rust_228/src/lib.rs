pub struct Solution {}

impl Solution {
  pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
    if nums.is_empty() {
        return vec![];
    }

    let mut res: Vec<String> = vec![];
    let mut cur = nums[0];
    let mut start = nums[0];
    for n in &nums[1..] {
        if *n == cur + 1 {
            cur = *n;
        } else {
            Solution::record(&mut res, start, cur);
            start = *n;
            cur = *n;
        }
    }
    Solution::record(&mut res, start, cur);

    res
  }

  pub fn record(vec: &mut Vec<String>, start: i32, end: i32) {
      if start == end {
          vec.push(format!("{}", start))
      } else {
          vec.push(format!("{}->{}", start, end))
      }
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
      assert_eq!(Solution::summary_ranges(vec![0, 1, 2, 4, 5, 7]), vec![String::from("0->2"), String::from("4->5"), String::from("7")]);
      assert_eq!(Solution::summary_ranges(vec![0, 2, 3, 4, 6, 8, 9]), vec![String::from("0"), String::from("2->4"), String::from("6"), String::from("8->9")]);
  }
}
