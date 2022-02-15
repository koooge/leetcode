pub struct Solution {}

impl Solution {
  pub fn is_subsequence(s: String, t: String) -> bool {
    let mut index = 0;

    for c2 in t.chars() {
      if index == s.chars().count() {
        break
      }

      let c1 = s.chars().nth(index).unwrap();
      if c2 == c1 {
        index += 1
      }
    }

    index == s.chars().count()
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
      assert_eq!(Solution::is_subsequence(String::from("abc"), String::from("ahbgdc")), true);
      assert_eq!(Solution::is_subsequence(String::from("axc"), String::from("ahbgdc")), false);
  }
}
