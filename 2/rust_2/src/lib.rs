// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}

impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}

struct Solution;

impl Solution {
  pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut l1 = l1;
    let mut l2 = l2;
    let mut carry = 0;
    let mut head = ListNode::new(0);
    let mut current_node = &mut head;
    let mut a;
    let mut b;
    while l1.is_some() || l2.is_some() || carry != 0 {
        a = 0;
        b = 0;
        if l1.is_some() {
            a = l1.as_ref()?.val;
            l1 = l1?.next;
        }
        if l2.is_some() {
            b = l2.as_ref()?.val;
            l2 = l2?.next;
        }
        carry = a + b + carry;
        current_node.next = Some(Box::new(ListNode {
            val: carry % 10,
            next: None,
        }));
        current_node = current_node.next.as_mut()?;
        carry = carry / 10;
    }
    return head.next;
  }
}


#[cfg(test)]
mod tests {
    #[test]
    fn case1() {
        let mut solution = Solution::new()
        assert_eq!(add_two_numbers(11, l2), 4);
    }
}
