pub struct Solution {}

impl Solution {
    pub fn uncommon_from_sentences(s1: String, s2: String) -> Vec<String> {
        s1.split_whitespace()
            .chain(s2.split_whitespace())
            .fold(std::collections::HashMap::new(), |mut m, w| {
                let c = m.entry(w).or_insert(0usize);
                *c += 1;
                m
            })
            .iter()
            .fold(Vec::new(), |mut acc, (&s, &f)| {
                if f == 1 {
                    acc.push(s.to_string())
                }
                acc
            })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert!(Solution::uncommon_from_sentences(String::from("this apple is sweet"), String::from("this apple is sour")).iter().all(|item| {
            vec![String::from("sweet"), String::from("sour")].contains(item)
        }));
        assert!(Solution::uncommon_from_sentences(String::from("apple apple"), String::from("banana")).iter().all(|item| {
            vec![String::from("banana")].contains(item)
        }));
    }
}
