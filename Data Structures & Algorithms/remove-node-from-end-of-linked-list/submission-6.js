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

        

        if (n == size) {
            let nxt = head.next
            head.next = null
            return nxt
        }

        let tPos = size - n
        let cPos = 1
        curr = head
        while (cPos < tPos) {
            curr = curr.next
            cPos++
        }

        curr.next = curr.next.next
        return head
    }
}


// 1 2 3 4 => s = 4; n = 2; 2 - f
//   f 2

// 1 2 3 4 5 6 7 => s = 7; n = 3; 4 - f
//       f 3

