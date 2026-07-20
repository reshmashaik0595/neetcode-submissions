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
     * @return {number}
     */
    maxDepth(root) {
        if (root == null) return 0
        function dfs(root) {
            if (root == null) return -1

            let left = 1 + dfs(root.left)
            let right = 1 + dfs(root.right)
            return Math.max(left, right)
        }
        return 1 + dfs(root)
    }
}
