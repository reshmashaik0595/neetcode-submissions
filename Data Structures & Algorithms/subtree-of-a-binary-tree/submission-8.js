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
        function areSame(r1, r2) {
            if (r1 == null && r2 == null) return true
            if (r1 == null || r2 == null) return false
            if (r1.val !== r2.val) return false
            return areSame(r1.left, r2.left) && areSame(r1.right, r2.right)
        }
        function dfs(root) {
            if (root == null) return false
            if (subRoot == null) return true
            if (areSame(root, subRoot)) {
                return true
            }
            return dfs(root.left) || dfs(root.right)
        }
        return dfs(root)
    }
}
