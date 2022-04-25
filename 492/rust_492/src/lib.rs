pub struct Solution {}

impl Solution {
    pub fn construct_rectangle(area: i32) -> Vec<i32> {
        let mut x = (area as f32).sqrt() as i32;
        while area % x != 0 {
            x -= 1;
        }
        vec![area / x, x]
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::construct_rectangle(4), vec![2, 2]);
        assert_eq!(Solution::construct_rectangle(37), vec![37, 1]);
        assert_eq!(Solution::construct_rectangle(122122), vec![427, 286]);
    }
}
