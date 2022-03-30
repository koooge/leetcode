pub struct Solution {}

use std::collections::HashSet;
impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let len_n = nums.len();
        let mut nums_set = HashSet::<i32>::new();
        for n in 1..=len_n as i32 {
            nums_set.insert(n);
        }
        for num in nums {
            if nums_set.contains(&num) {
                nums_set.remove(&num);
            }
        }
        nums_set.into_iter().collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::find_disappeared_numbers(vec![4, 3, 2, 7, 8, 2, 3, 1]), vec![5, 6]);
        // assert_eq!(Solution::find_disappeared_numbers(vec![1, 1]), vec![2]);
    }
}
