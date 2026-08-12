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
        function solve(root) {
            if (root == null) return 0
            let left = solve(root.left)
            let right = solve(root.right)
            return 1 + Math.max(left, right)
        }
        return solve(root)
    }
}
