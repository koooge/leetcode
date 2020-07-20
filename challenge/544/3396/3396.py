# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        list = None
        ptr = list

        while head != None:
            if head.val != val:
                if ptr != None:
                    ptr.next = ListNode(head.val)
                    ptr = ptr.next
                else:
                    list = ListNode(head.val)
                    ptr = list
            head = head.next

        return list

s = Solution()
h1 = ListNode(1, ListNode(2, ListNode(6, ListNode(3, ListNode(4, ListNode(5, ListNode(6)))))))
print(s.removeElements(h1, 6)) # 1 -> 2 -> 3 -> 4 -> 5
