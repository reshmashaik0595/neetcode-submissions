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


        let mHead = head
        let rHead = this.reverseLL(mid.next)
        mid.next = null

        while (rHead !== null) {
            console.log(mHead.val, rHead.val)
            let mHeadNxt = mHead.next
            let rHeadNxt = rHead.next

            mHead.next = rHead
            rHead.next = mHeadNxt

            mHead = mHeadNxt
            rHead = rHeadNxt

        }
        return head
    }

    findMiddle(head) {
        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    reverseLL(head) {
        let prev = null
        let temp = head
        while (temp !== null) {
            let nxt = temp.next
            temp.next = prev
            prev = temp
            temp = nxt
        }
        return prev
    }
}
