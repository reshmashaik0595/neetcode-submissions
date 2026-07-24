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
            if (root === null) {
                return 0
            }

            let l = dfs(root.left)
            let r = dfs(root.right)
            let left_right = root.val + l + r
            let only_root = root.val
            let max_left_right = Math.max(l, r) + root.val
            max = Math.max(max, left_right, only_root, max_left_right)
            return Math.max(only_root, max_left_right)
        }
        dfs(root)
        return max
    }
}
