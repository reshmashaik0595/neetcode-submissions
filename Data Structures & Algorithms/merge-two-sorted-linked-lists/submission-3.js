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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let nHead = new ListNode(-1)
        let nCurr = nHead
        let curr1 = list1
        let curr2 = list2
        while (curr1 != null && curr2 !== null) {
            let val1 = curr1.val
            let val2 = curr2.val
            if (val1 <= val2) {
                nCurr.next = curr1
                curr1 = curr1.next
            } else {
                nCurr.next = curr2
                curr2 = curr2.next
            }
            nCurr = nCurr.next
        }

        while (curr1 != null) {
            nCurr.next = curr1
            curr1 = curr1.next
            nCurr = nCurr.next
        }

        while (curr2 != null) {
            nCurr.next = curr2
            curr2 = curr2.next
            nCurr = nCurr.next
        }
        return nHead.next
    }
}
