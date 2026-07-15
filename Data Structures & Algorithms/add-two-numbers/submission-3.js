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

        let temp = new ListNode(-1)
        let dummy = temp

        let carry = 0
        let p1 = l1
        let p2 = l2
        while (p1 !== null || p2 !== null) {
            let v1 = p1 == null ? 0 : p1.val
            let v2 = p2 == null ? 0 : p2.val

            let sum = v1 + v2 + carry
            carry = Math.floor(sum / 10)
            let digit = sum % 10
            console.log(sum, digit, carry)
            dummy.next = new ListNode(digit)
            dummy = dummy.next

            if (p1 !== null) p1 = p1.next
            if (p2 !== null) p2 = p2.next
        }

        if(carry !== 0){
            dummy.next = new ListNode(carry)
        }

        return temp.next
    }
}
