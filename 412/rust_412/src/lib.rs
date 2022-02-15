pub struct Solution {}

impl Solution {
  pub fn fizz_buzz(n: i32) -> Vec<String> {
    let mut ret = vec![];

    for i in 1..=n {
      if i % 15 == 0 {
        ret.push(String::from("FizzBuzz"))
      } else if i % 3  == 0 {
        ret.push(String::from("Fizz"))
      } else if i % 5  == 0 {
        ret.push(String::from("Buzz"))
      } else {
        ret.push(i.to_string())
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
      assert_eq!(Solution::fizz_buzz(3), ["1", "2", "Fizz"]);
      assert_eq!(Solution::fizz_buzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
      assert_eq!(Solution::fizz_buzz(15), ["1", "2", "Fizz", "4", "Buzz" , "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  }
}
