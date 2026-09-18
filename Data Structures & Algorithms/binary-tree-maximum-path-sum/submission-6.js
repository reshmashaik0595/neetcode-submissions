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
    maxPathSum(root) {
        function dfs(root) {
            if (root == null) return 0
            let left = dfs(root.left)
            let right = dfs(root.right)

            let only_root = root.val
            let left_or_right = Math.max(left, right) + root.val
            let left_right_root = left + right + root.val
            maxSum = Math.max(maxSum, only_root, left_or_right, left_right_root)
            return Math.max(only_root, left_or_right)
        }
        let maxSum = -Infinity
        dfs(root)
        return maxSum
    }
}
