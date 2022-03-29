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
      right: None
    }
  }
}

struct Solution {}

use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn tree2str(root: Option<Rc<RefCell<TreeNode>>>) -> String {
      fn traverse(node: Option<Rc<RefCell<TreeNode>>>, s: &mut String) {
        if let Some(node) = node {
          let node = node.borrow();
          *s += node.val.to_string().as_str();
          if node.left.is_some() || node.right.is_some() {
            *s += "(";
            traverse(node.left.clone(), s);
            *s += ")";

            if node.right.is_some() {
              *s += "(";
              traverse(node.right.clone(), s);
              *s += ")";
            }
          }
        }
      }

      let mut s = String::new();
      traverse(root, &mut s);
      s
    }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn case1() {
    let head = Some(Rc::new(RefCell::new(TreeNode::new(1))));
    head.as_ref().unwrap().borrow_mut().left = Some(Rc::new(RefCell::new(TreeNode::new(2))));
    head.as_ref().unwrap().borrow_mut().right = Some(Rc::new(RefCell::new(TreeNode::new(3))));
    head.as_ref().unwrap().borrow_mut().left.as_ref().unwrap().borrow_mut().left = Some(Rc::new(RefCell::new(TreeNode::new(4))));

    assert_eq!(Solution::tree2str(head), String::from("1(2(4))(3)"));
  }

  #[test]
  fn case2() {
    let head = Some(Rc::new(RefCell::new(TreeNode::new(1))));
    head.as_ref().unwrap().borrow_mut().left = Some(Rc::new(RefCell::new(TreeNode::new(2))));
    head.as_ref().unwrap().borrow_mut().right = Some(Rc::new(RefCell::new(TreeNode::new(3))));
    head.as_ref().unwrap().borrow_mut().left.as_ref().unwrap().borrow_mut().right = Some(Rc::new(RefCell::new(TreeNode::new(4))));

    assert_eq!(Solution::tree2str(head), String::from("1(2()(4))(3)"));
  }
}
