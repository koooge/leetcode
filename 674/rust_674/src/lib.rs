pub struct Solution {}

impl Solution {
    pub fn find_length_of_lcis(nums: Vec<i32>) -> i32 {
        let (mut cur_len, mut max_len) = (1, 1);
        let mut prev_val = nums[0];

        for &val in &nums[1..] {
            match val > prev_val {
                true => {
                  cur_len += 1;
                  max_len = max_len.max(cur_len);
                }
                false => cur_len = 1,
            }
            prev_val = val;
        }
        max_len
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::find_length_of_lcis(vec![1, 3, 5, 4, 7]), 3);
        assert_eq!(Solution::find_length_of_lcis(vec![2, 2, 2, 2, 2]), 1);
        assert_eq!(Solution::find_length_of_lcis(vec![1, 3, 5, 7]), 4);
    }
}
