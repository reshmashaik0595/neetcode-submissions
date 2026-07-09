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
        let ans = new ListNode(-1)
        let dummy = ans
        let temp1 = list1
        let temp2 = list2
        while (temp1 !== null && temp2 !== null) {
            if (temp1.val <= temp2.val) {
                dummy.next = temp1
                temp1 = temp1.next
            } else {
                dummy.next = temp2
                temp2 = temp2.next
            }
            dummy = dummy.next
        }

        while (temp1 !== null) {
            dummy.next = temp1
            dummy = dummy.next
            temp1 = temp1.next
        }


        while (temp2 !== null) {
            dummy.next = temp2
            dummy = dummy.next
            temp2 = temp2.next
        }
        return ans.next
    }
}
