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
    isValidBST(root) {
        if (root == null) return true
        function solve(root, lower, upper) {
            if (root == null) return true
            if (root.val <= lower || root.val >= upper) return false
            let left = solve(root.left, lower, root.val)
            let right = solve(root.right, root.val, upper)
            return left && right
        }
        return solve(root, -Infinity, +Infinity)
    }
}
