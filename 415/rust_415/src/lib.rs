pub struct Solution {}

impl Solution {
  pub fn add_strings(num1: String, num2: String) -> String {
    let mut brev1 = num1.bytes().rev();
    let mut brev2 = num2.bytes().rev();
    let mut v = Vec::with_capacity(brev1.len().max(brev2.len()) + 1);
    let mut carry = false;
    loop {
        let n1 = brev1.next().map(|u| u - b'0');
        let n2 = brev2.next().map(|u| u - b'0');
        println!("{:?} {:?}", n1, n2);
        if n1.is_none() && n2.is_none() && !carry {
            break;
        }
        let d = if carry { 1 } else { 0 } + n1.unwrap_or_default() + n2.unwrap_or_default();
        carry = d > 9;
        v.push((b'0' + d % 10) as char);
    }
    v.iter().rev().collect()
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
      assert_eq!(Solution::add_strings(String::from("11"), String::from("123")), String::from("134"));
      assert_eq!(Solution::add_strings(String::from("456"), String::from("77")), String::from("533"));
      assert_eq!(Solution::add_strings(String::from("0"), String::from("0")), String::from("0"));
      assert_eq!(Solution::add_strings(String::from("6913259244"), String::from("71103343")), String::from("6984362587"));
      assert_eq!(Solution::add_strings(String::from("3876620623801494171"), String::from("6529364523802684779")), String::from("10405985147604178950"));
      assert_eq!(Solution::add_strings(String::from("401716832807512840963"), String::from("167141802233061013023557397451289113296441069")), String::from("167141802233061013023557799168121920809282032"));
  }
}
