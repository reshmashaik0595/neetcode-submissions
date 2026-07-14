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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length == 0) return null
        return this.partitionAndMerge(0, lists.length - 1, lists)
    }

    partitionAndMerge(s, e, lists) {
        if (s == e) {
            return lists[s]
        }
        let mid = s + Math.floor((e - s) / 2)
        let p1 = this.partitionAndMerge(s, mid, lists)
        let p2 = this.partitionAndMerge(mid + 1, e, lists)
        return this.mergeTwoLists(p1, p2)
    }

    mergeTwoLists(l1, l2) {
        if (l1 == null) return l2
        if (l2 == null) return l1
        if (l1.val <= l2.val) {
            l1.next = this.mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = this.mergeTwoLists(l2.next, l1)
            return l2
        }
    }
}
