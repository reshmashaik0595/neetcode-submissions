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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root == null) return true
        function height(root) {
            if (root == null) return -1
            let left = 1 + height(root.left)
            let right = 1 + height(root.right)
            return Math.max(left, right)
        }

        function solve(root) {
            if (root == null) return true
            let left = height(root.left)
            let right = height(root.right)
            if (Math.abs(left - right) > 1) return false
            return solve(root.left) && solve(root.right)
        }

        return solve(root)
    }
}
