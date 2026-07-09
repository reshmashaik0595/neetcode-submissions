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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0
        let h1 = l1
        let h2 = l2

        let ans = new ListNode(-1)
        let dummy = ans
        while (h1 !== null || h2 !== null) {
            let v1 = h1 ? h1.val : 0
            let v2 = h2 ? h2.val : 0

            let total = v1 + v2 + carry
            let digit = total % 10
            carry = Math.floor(total / 10)

            dummy.next = new ListNode(digit)
            dummy = dummy.next

            if (h1 !== null) h1 = h1.next
            if (h2 !== null) h2 = h2.next
        }

        if(carry !== 0) dummy.next = new ListNode(carry)

        return ans.next
    }
}
