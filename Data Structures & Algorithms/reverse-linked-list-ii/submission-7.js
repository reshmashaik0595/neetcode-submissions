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
        let temp = new ListNode(-1)
        temp.next = head
        let dummy = temp

        let p1 = dummy
        let pos = 1
        while (pos < left) {
            p1 = p1.next
            pos++
        }
        let p2 = p1.next

        let p3 = dummy
        pos = 1
        while (pos <= right) {
            p3 = p3.next
            pos++
        }
        let p4 = p3.next
        p1.next = null
        p3.next = null

        let nH = this.reverseLL(p2)
        p1.next = nH
        p2.next = p4
        return temp.next
    }

    reverseLL(head) {
        let prev = null
        let curr = head
        while (curr !== null) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }
        return prev
    }
}
