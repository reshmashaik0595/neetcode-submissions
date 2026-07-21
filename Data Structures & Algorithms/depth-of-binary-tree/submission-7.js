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

        function dfs(root, depth) {
            if (root == null) {
                return depth - 1
            }
            return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))
        }
        return dfs(root, 1)
    }
}
