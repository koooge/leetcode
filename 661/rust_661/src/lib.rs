pub struct Solution {}

static directions: [[i32; 2]; 9] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];

impl Solution {
    pub fn image_smoother(img: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut ret: Vec<Vec<i32>> = Vec::new();
        for i in 0..img.len() {
            let mut row: Vec<i32> = Vec::with_capacity(img[i].len());
            for j in 0..img[i].len() {
                row.push(Solution::find_smoothed_value(&img, i, j));
            }
            ret.push(row);
        }
        ret
    }

    fn find_smoothed_value(img: &Vec<Vec<i32>>, row: usize, col: usize) -> i32 {
        let mut total = 0;
        let mut count = 0;
        for [rowOff, colOff] in &directions {
            let new_row = (row as i32) + rowOff;
            let new_col = (col as i32) + colOff;

            if new_row >= 0
                && new_row < img.len() as i32
                && new_col >= 0
                && new_col < img[0].len() as i32
            {
                count += 1;
                total += img[new_row as usize][new_col as usize];
            }
        }
        total / count
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(
            Solution::image_smoother(vec![vec![1, 1, 1], vec![1, 0, 1], vec![1, 1, 1]]),
            vec![vec![0, 0, 0], vec![0, 0, 0], vec![0, 0, 0]],
        );
        assert_eq!(
            Solution::image_smoother(vec![
                vec![100, 200, 100],
                vec![200, 50, 200],
                vec![100, 200, 100]
            ]),
            vec![
                vec![137, 141, 137],
                vec![141, 138, 141],
                vec![137, 141, 137]
            ],
        );
    }
}
