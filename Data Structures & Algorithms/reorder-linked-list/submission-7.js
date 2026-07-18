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
     * @return {void}
     */
    reorderList(head) {
        let mid = this.findMiddle(head)
        let rHead = this.reverseLL(mid.next)
        mid.next = null

        let curr = head
        while (rHead !== null) {
            let nxt = curr.next
            let rNxt = rHead.next
            curr.next = rHead
            rHead.next = nxt
            curr = nxt
            rHead = rNxt
        }

        return head
    }

    findMiddle(head) {
        let slow = head
        let fast = head
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    reverseLL(head) {
        let prev = null
        let curr = head
        while (curr !== null) {
            let tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }
        return prev
    }
}
