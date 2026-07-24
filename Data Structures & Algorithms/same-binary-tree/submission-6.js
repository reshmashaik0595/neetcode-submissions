/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function isSame(p, q) {
            if (p == null && q == null) {
                return true
            }
            if (p == null || q == null) {
                return false
            }
            if (p.val !== q.val) {
                return false
            }
            return isSame(p.left, q.left) && isSame(p.right, q.right)
        }

        return isSame(p, q)
    }
}
