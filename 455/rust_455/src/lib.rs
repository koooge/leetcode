pub struct Solution {}

impl Solution {
    pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
      let mut ng = g;
      let mut ns = s;
      ng.sort();
      ns.sort();
      let mut count = 0;
      for i in 0..ng.len(){
          for j in 0..ns.len(){
              if ng[i] <= ns[j]{
                  ns.remove(j);
                  count += 1;
                  break;
              }
          }
      }
      count
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::find_content_children(vec![1,2,3], vec![1,1]), 1);
        assert_eq!(Solution::find_content_children(vec![1,2], vec![1,2,3]), 2);
    }
}
