/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let tmp = new ListNode(-1)
        tmp.next = head

        let pos = 1
        let curr = tmp
        while (pos < left) {
            curr = curr.next
            pos++
        }
        let p1 = curr
        let p2 = p1.next
        pos = 1
        curr = head
        while (pos < right) {
            curr = curr.next
            pos++
        }
        let p3 = curr
        let p4 = p3.next

        p1.next = null
        p3.next = null

        let rHead = this.reverseLL(p2)
        p1.next = rHead
        p2.next = p4
        return tmp.next
    }

    reverseLL(head) {
        let prev = null
        let curr = head
        while (curr !== null) {
            let nn = curr.next
            curr.next = prev
            prev = curr
            curr = nn
        }
        return prev
    }
}
