pub struct Solution {}

use std::collections::HashMap;

impl Solution {
  pub fn find_lhs(nums: Vec<i32>) -> i32 {
    let mut hm = HashMap::new();
    nums.iter()
        .for_each(|&num| *hm.entry(num).or_insert(0) += 1);
    hm.iter().fold(0, |acc, (&num, &count)| {
        hm.get(&(num + 1)).map_or(acc, |c| acc.max(count + c))
    })
  }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::find_lhs(vec![1,3,2,2,5,2,3,7]), 5);
        assert_eq!(Solution::find_lhs(vec![1,2,3,4]), 2);
        assert_eq!(Solution::find_lhs(vec![1,1,1,1]), 0);
    }
}
