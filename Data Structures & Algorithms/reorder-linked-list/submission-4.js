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

        let cHead = head
        while(rHead !== null){
            let cNext = cHead.next
            let rNext = rHead.next

            cHead.next = rHead
            rHead.next = cNext

            cHead = cNext
            rHead = rNext
        }

        return head
    }

    findMiddle(head) {
        let slow = head
        let fast = head
        while (fast.next !== null && fast.next.next != null) {
            slow = slow.next
            fast = fast.next.next
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
