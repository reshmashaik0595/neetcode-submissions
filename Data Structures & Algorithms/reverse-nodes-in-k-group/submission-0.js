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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let temp = new ListNode(-1)
        temp.next = head

        let prev = temp
        let curr = head
        while (curr !== null) {
            let KthNode = this.findKthNode(curr, k)

            if (KthNode == null) {
                prev.next = curr
                break
            }
            console.log('KthNode :: ' + KthNode.val)
            let nxt = KthNode.next
            KthNode.next = null

            let rHead = this.reverseLL(curr)
            console.log('rHead :: ' + rHead.val)
            console.log('prev :: ' + prev.val)
            console.log('curr :: ' + curr.val)

            prev.next = rHead
            prev = curr
            curr = nxt
        }
        return temp.next
    }

    reverseLL(head) {
        let prev = null
        let curr = head
        while (curr !== null) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }
        return prev
    }

    findKthNode(curr, k) {
        let pos = 1
        while (pos < k) {
            if (curr == null) {
                return null
            }
            curr = curr.next
            pos++
        }
        return curr
    }
}
