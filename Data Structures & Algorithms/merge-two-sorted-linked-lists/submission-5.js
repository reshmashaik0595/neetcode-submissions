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
        return this.solve(list1, list2);
    }

    solve(h1, h2) {
        if (h1 == null) {
            return h2
        }
        if (h2 == null) {
            return h1
        }

        if (h1.val < h2.val) {
            h1.next = this.solve(h1.next, h2)
            return h1
        } else {
            h2.next = this.solve(h2.next, h1)
            return h2
        }

    }
}
