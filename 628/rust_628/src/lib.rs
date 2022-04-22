pub struct Solution {}

impl Solution {
    pub fn maximum_product(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();
        let len_n: usize = nums.len();
        let product1: i32 = nums[0] * nums[1] * nums[len_n - 1];
        let product2: i32 = nums[len_n - 3] * nums[len_n - 2] * nums[len_n - 1];
        std::cmp::max(product1, product2)
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::maximum_product(vec![1, 2, 3]), 6);
        assert_eq!(Solution::maximum_product(vec![1, 2, 3, 4]), 24);
        assert_eq!(Solution::maximum_product(vec![-1, -2, -3]), -6);
    }
}
