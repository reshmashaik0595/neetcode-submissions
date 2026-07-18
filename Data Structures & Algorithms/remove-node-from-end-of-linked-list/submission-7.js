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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let size = 0
        let curr = head
        while (curr !== null) {
            curr = curr.next
            size++
        }
        if (size == n) return head.next

        let lookFor = size - n
        let pos = 1
        curr = head
        while (pos < lookFor) {
            curr = curr.next
            pos++ 
        }
        curr.next = curr.next.next
        return head
    }
}
