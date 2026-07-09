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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let temp = head
        while(temp !== null){
            let nxt = temp.next
            temp.next = prev
            prev = temp
            temp = nxt
        }

        return prev
    }
}
