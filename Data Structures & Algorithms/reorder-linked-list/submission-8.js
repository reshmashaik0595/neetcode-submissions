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
        let curr = head
        let middle = this.findMiddle(head)
        let rHead = this.reverseLL(middle.next)
        middle.next = null

        while (rHead !== null) {
            let cNxt = curr.next
            let rNxt = rHead.next

            curr.next = rHead
            rHead.next = cNxt

            curr = cNxt
            rHead = rNxt
        }
        return head
    }

    findMiddle(head) {
        let fast = head
        let slow = head
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }

    reverseLL(head) {
        let curr = head
        let prev = null
        while (curr !== null) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }
        return prev
    }
}
