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
            if (root === null) {
                return 0
            }
            let left = dfs(root.left)
            let right = dfs(root.right)
            let left_right = left + right + root.val
            let only_root = root.val
            let left_or_right = Math.max(left, right) + root.val

            max = Math.max(max, left_right, only_root, left_or_right)

            return Math.max(only_root, left_or_right)
        }
        let max = -Infinity
        dfs(root)
        return max
    }
}
