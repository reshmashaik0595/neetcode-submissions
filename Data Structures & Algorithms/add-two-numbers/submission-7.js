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
        let tmp = new ListNode(-1)
        let dummy = tmp
        let carry = 0
        let h1 = l1
        let h2 = l2
        while (h1 !== null || h2 !== null) {
            let v1 = h1 == null ? 0 : h1.val
            let v2 = h2 == null ? 0 : h2.val

            let sum = v1 + v2 + carry
            let digit =sum % 10
            carry =  Math.floor(sum / 10)
            // console.log(sum, digit, carry)
            dummy.next = new ListNode(digit)
            dummy = dummy.next

            if (h1 !== null) h1 = h1.next
            if (h2 !== null) h2 = h2.next
        }

        if (carry > 0) {
            dummy.next = new ListNode(carry)
        }

        return tmp.next
    }
}
