pub struct Solution {}

impl Solution {
    pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
      let mut score_sort = score.clone();
      score_sort.sort_unstable();

      let m1 = score_sort.pop().unwrap_or(-1);
      let m2 = score_sort.pop().unwrap_or(-1);
      let m3 = score_sort.pop().unwrap_or(-1);

      score
          .iter()
          .map(|&x| match x {
              _ if x == m1 => String::from("Gold Medal"),
              _ if x == m2 => String::from("Silver Medal"),
              _ if x == m3 => String::from("Bronze Medal"),
              _ => score_sort
                  .binary_search(&x)
                  .map_or(0, |i| score.len() - i)
                  .to_string(),
          })
          .collect()
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(
            Solution::find_relative_ranks(vec![5, 4, 3, 2, 1]),
            vec![
                String::from("Gold Medal"),
                String::from("Silver Medal"),
                String::from("Bronze Medal"),
                String::from("4"),
                String::from("5"),
            ]
        );
        assert_eq!(
          Solution::find_relative_ranks(vec![10,3,8,9,4]),
          vec![
              String::from("Gold Medal"),
              String::from("5"),
              String::from("Bronze Medal"),
              String::from("Silver Medal"),
              String::from("4"),
          ]
      );
    }
}
