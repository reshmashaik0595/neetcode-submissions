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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function sameTree(p, q) {
            if (p == null && q == null) return true
            if (p == null || q == null) return false
            if (p.val !== q.val) return false
            return sameTree(p.left, q.left) && sameTree(p.right, q.right)
        }

        function dfs(p, q) {
            if (p == null) return false
            if (q == null) return true
            if (sameTree(p, q) || sameTree(p, q)) {
                return true
            }
            let left = dfs(p.left, q)
            let right = dfs(p.right, q)
            return left || right
        }

        return dfs(root, subRoot)
    }
}
