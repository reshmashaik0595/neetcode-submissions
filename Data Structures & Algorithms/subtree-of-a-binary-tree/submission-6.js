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
            let left = isSame(p.left, q.left)
            let right = isSame(p.right, q.right)
            return (left && right)
        }
        function dfs(root, subroot) {
            if (root == null) {
                return false
            }

            if (subRoot == null) {
                return false
            }

            if (isSame(root, subroot)) {
                return true
            }

            return (dfs(root.left, subroot) || dfs(root.right, subroot))

        }
        return dfs(root, subRoot)
    }
}
