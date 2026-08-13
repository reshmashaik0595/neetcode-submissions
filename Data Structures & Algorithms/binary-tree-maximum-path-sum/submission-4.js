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
        function solve(root) {
            if (root == null) return 0
            let left = solve(root.left)
            let right = solve(root.right)
            let root_only = root.val
            let left_right = root.val + Math.max(left, right)
            let down = root.val + left + right
            max = Math.max(max, root_only, left_right, down)
            return Math.max(root_only, left_right)
        }
        let max = -Infinity
        solve(root)
        return max
    }
}
