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
      right: None
    }
  }
}

pub struct Solution {}

use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
  pub fn postorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = Vec::new();
    Solution::helper(root, &mut res);
    res
  }

  fn helper(root: Option<Rc<RefCell<TreeNode>>>, vec: &mut Vec<i32>) {
      if let Some(node) = root {
          Solution::helper(node.borrow().left.clone(), vec);
          Solution::helper(node.borrow().right.clone(), vec);
          vec.push(node.borrow().val);
      }
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn case1() {
    let head = Some(Rc::new(RefCell::new(TreeNode::new(1))));
    head.as_ref().unwrap().borrow_mut().right = Some(Rc::new(RefCell::new(TreeNode::new(2))));
    head.as_ref().unwrap().borrow_mut().right.as_ref().unwrap().borrow_mut().left = Some(Rc::new(RefCell::new(TreeNode::new(3))));

    assert_eq!(Solution::postorder_traversal(head), vec![3, 2, 1]);
  }


  #[test]
  fn case2() {
    assert_eq!(Solution::postorder_traversal(None), vec![]);
  }

  #[test]
  fn case3() {
    let head = Some(Rc::new(RefCell::new(TreeNode::new(1))));

    assert_eq!(Solution::postorder_traversal(head), vec![1]);
  }
}
