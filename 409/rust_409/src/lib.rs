pub struct Solution {}

impl Solution {
  pub fn longest_palindrome(s: String) -> i32 {
    let mut dict: [i32; 128] = [0; 128];
    for &b in s.as_bytes() {
      dict[b as usize] += 1;
    }

    let mut ret = 0;
    for n in dict.iter() {
      ret += n;
      if n % 2 != 0 {
        ret -= 1;
        if ret % 2 == 0 {
          ret += 1;
        }
      }
    }
    ret
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
      assert_eq!(Solution::longest_palindrome(String::from("abccccdd")), 7);
      assert_eq!(Solution::longest_palindrome(String::from("a")), 1);
      assert_eq!(Solution::longest_palindrome(String::from("bb")), 2);
  }
}
