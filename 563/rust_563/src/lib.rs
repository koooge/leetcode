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

type Node = Rc<RefCell<TreeNode>>;

impl Solution {
    pub fn find_tilt(root: Option<Node>) -> i32 {
        fn recursive(node: &Option<Node>, tilt: &mut i32) -> i32 {
            match node {
                Some(node) => {
                    let node = node.borrow();
                    let left = recursive(&node.left, tilt);
                    let right = recursive(&node.right, tilt);

                    *tilt += i32::abs(left - right);
                    left + right + node.val
                }
                None => 0,
            }
        }
        let mut tilt = 0;
        recursive(&root, &mut tilt);
        tilt
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn case1() {
        let mut head = TreeNode::new(1);
        head.left = Some(Rc::new(RefCell::new(TreeNode::new(2))));
        head.right = Some(Rc::new(RefCell::new(TreeNode::new(3))));

        assert_eq!(Solution::find_tilt(Some(Rc::new(RefCell::new(head)))), 1);
    }
}
