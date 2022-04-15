// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

pub struct Solution {}

use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn find_second_minimum_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let (mut min1, mut min2) = (None, None);
        let mut stack = vec![root];
        while let Some(node) = stack.pop() {
            if let Some(node) = node {
                let node = node.borrow();
                let val = Some(node.val);
                if min1.is_none() {
                    min1 = val;
                } else if min1 > val {
                    min2 = min1;
                    min1 = val;
                } else if val > min1 && (min2.is_none() || min2 > val) {
                    min2 = val;
                }
                stack.push(node.left.clone());
                stack.push(node.right.clone());
            }
        }
        min2.unwrap_or(-1)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test1() {
        let e = Some(Rc::new(RefCell::new(TreeNode::new(7))));
        let d = Some(Rc::new(RefCell::new(TreeNode::new(5))));
        let mut c = TreeNode::new(5);
        c.left = d;
        c.right = e;
        let b = Some(Rc::new(RefCell::new(TreeNode::new(2))));
        let mut a = TreeNode::new(2);
        a.left = b;
        a.right = Some(Rc::new(RefCell::new(c)));
        assert_eq!(
            Solution::find_second_minimum_value(Some(Rc::new(RefCell::new(a)))),
            5
        );
    }

    #[test]
    fn test2() {
        let b = Some(Rc::new(RefCell::new(TreeNode::new(2))));
        let c = Some(Rc::new(RefCell::new(TreeNode::new(2))));
        let mut a = TreeNode::new(2);
        a.left = b;
        a.right = c;
        assert_eq!(
            Solution::find_second_minimum_value(Some(Rc::new(RefCell::new(a)))),
            -1
        );
    }
}
