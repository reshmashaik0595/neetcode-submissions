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
        let max = -Infinity
        function dfs(root) {
            if (root == null) {
                return 0
            }

            let left = dfs(root.left)
            let right = dfs(root.right)
            let left_right = Math.max(left, right) + root.val
            let only_root = root.val
            let down_path = left + right + root.val

            max = Math.max(max, left_right, only_root, down_path)
            return Math.max(left_right, only_root)
        }

        dfs(root)
        return max
    }
}
