pub struct Solution {}

impl Solution {
    pub fn find_restaurant(list1: Vec<String>, list2: Vec<String>) -> Vec<String> {
        let mut res: Vec<String> = Vec::new();
        let mut min = usize::MAX;

        for i in 0..list1.len() {
            for j in 0..list2.len() {
                if i + j > min {
                    break;
                }

                if list1[i] == list2[j] {
                    if i + j == min {
                        res.push(list1[i].to_string());
                    } else if i + j < min {
                        min = i + j;
                        res = vec![list1[i].to_string()];
                    }
                    break;
                }
            }
        }

        res
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(
            Solution::find_restaurant(
                vec![
                    String::from("Shogun"),
                    String::from("Tapioca Express"),
                    String::from("Burger King"),
                    String::from("KFC")
                ],
                vec![
                    String::from("Piatti"),
                    String::from("The Grill at Torrey Pines"),
                    String::from("Hungry Hunter Steakhouse"),
                    String::from("Shogun")
                ],
            ),
            vec![String::from("Shogun")]
        );
        assert_eq!(
            Solution::find_restaurant(
                vec![
                    String::from("Shogun"),
                    String::from("Tapioca Express"),
                    String::from("Burger King"),
                    String::from("KFC")
                ],
                vec![
                    String::from("KFC"),
                    String::from("Shogun"),
                    String::from("Burger King")
                ],
            ),
            vec![String::from("Shogun")]
        );
    }
}
