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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let ans = new ListNode(-1)
        let dummy = ans
        dummy.next = head
        
        let p1 = dummy
        let p2 = head
        let pos = 1
        while (pos < left) {
            p1 = p1.next
            p2 = p2.next
            pos++
        }
        let p3 = head
        pos = 1
        while (pos < right) {
            p3 = p3.next
            pos++
        }
        let p4 = p3.next
        console.log('prev::', p1)
        console.log('left::', p2)
        console.log('right::', p3)
        console.log('next::', p4)

        p1.next = null
        p3.next = null

        let nn = this.reverseLL(p2)
        p1.next = nn
        p2.next = p4

        return dummy.next
    }

    reverseLL(head) {
        let prev = null
        let temp = head
        while (temp !== null) {
            let nxt = temp.next
            temp.next = prev
            prev = temp
            temp = nxt
        }
        return prev
    }
}
