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

        if (head == null) {
            return null
        }

        let size = 0
        let temp = head
        while (temp !== null) {
            temp = temp.next
            size++
        }

        if (size == n) {
            let nxt = head.next
            head.next = null
            return nxt
        }

        let targetNode = size - n
        let curr = 1
        temp = head
        while (curr < targetNode) {
            temp = temp.next
            curr++
        }
        
        temp.next = temp.next.next
        return head
    }
}

//     t
// 1 2 3 4

// n = 4
// t = 2
// n - t = 2

