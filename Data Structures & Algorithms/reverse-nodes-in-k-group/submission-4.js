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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let temp = new ListNode(-1)
        temp.next = head

        let prev = temp
        let curr = head

        while (curr !== null) {
            let kthNode = this.findKthNode(curr, k)
            if (kthNode == null) {
                prev.next = curr
                break
            }
            let KthNext = kthNode.next
            kthNode.next = null
            prev.next = this.reverseLL(curr)
            prev = curr
            curr = KthNext
        }

        return temp.next
    }

    findKthNode(head, k) {
        let pos = 1
        let curr = head
        while (pos < k && curr !== null) {
            curr = curr.next
            pos++
        }
        return curr
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
