pub struct Solution {}

impl Solution {
  pub fn to_hex(num: i32) -> String {
    format!("{:x}", num)
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
    assert_eq!(Solution::to_hex(26), String::from("1a"));
    assert_eq!(Solution::to_hex(-1), String::from("ffffffff"));
  }
}
