pub struct Solution {}

impl Solution {
    pub fn has_alternating_bits(n: i32) -> bool {
        let bin = format!("{:b}", n);
        let mut ret = true;
        for i in 0..bin.len() {
          if bin.chars().nth(i) == bin.chars().nth(i+1) {
            ret = false;
            break;
          }
        }
        ret
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::has_alternating_bits(5), true);
        assert_eq!(Solution::has_alternating_bits(7), false);
        assert_eq!(Solution::has_alternating_bits(11), false);
    }
}
