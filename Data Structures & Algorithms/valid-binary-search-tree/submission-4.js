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
        return this.solve(root, +Infinity, -Infinity)
    }
    solve(root, upper, lower) {
        if (root == null) {
            return true
        }
        if (upper <= root.val || root.val <= lower) {
            return false
        }
        return (this.solve(root.left, root.val, lower) && this.solve(root.right, upper, root.val))
    }
}
