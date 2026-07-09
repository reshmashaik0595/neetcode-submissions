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
     * @return {boolean}
     */
    hasCycle(head) {
        let f = head
        let s = head
        while (f !== null && f.next !== null && f.next.next !== null) {
            f = f.next.next
            s = s.next
            if (f == s) {
                return true
            }
        }
        return false
    }
}
