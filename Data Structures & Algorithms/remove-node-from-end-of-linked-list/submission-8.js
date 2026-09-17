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
        let curr = head;
        let pos = 1;
        while (curr.next !== null) {
            curr = curr.next;
            pos++;
        }

        let totalNodes = pos;
        if (totalNodes == n || totalNodes == 1) {
            return head.next;
        }

        let deleteNodePos = totalNodes - n;
        curr = head;
        pos = 1;
        while (pos !== deleteNodePos) {
            curr = curr.next;
            pos++;
        }

        curr.next = curr.next.next

        return head
    }
}
