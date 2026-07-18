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
        if (s >= e) {
            return lists[s]
        }
        let mid = s + Math.floor((e - s) / 2)
        let p1 = this.partitionAndMerge(s, mid, lists)
        let p2 = this.partitionAndMerge(mid + 1, e, lists)
        return this.mergeSort(p1, p2)
    }

    mergeSort(h1, h2) {
        if (h1 == null) return h2
        if (h2 == null) return h1
        if (h1.val < h2.val) {
            h1.next = this.mergeSort(h1.next, h2)
            return h1
        } else {
            h2.next = this.mergeSort(h2.next, h1)
            return h2
        }
    }
}
