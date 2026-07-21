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
    diameterOfBinaryTree(root) {
        let max = 0
        function dfs(root) {
            if (root == null) return 0

            let left = dfs(root.left)
            let right = dfs(root.right)
            max = Math.max(left + right, max)
            return 1 + Math.max(left, right)
        }

        dfs(root)
        return max
    }
}
