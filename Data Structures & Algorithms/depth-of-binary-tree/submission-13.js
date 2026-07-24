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
        function dfs(root) {
            if (root == null) {
                return 0
            }

            let left = dfs(root.left)
            let right = dfs(root.right)

            return 1 + Math.max(left, right)
        }
        return dfs(root)
    }
}
