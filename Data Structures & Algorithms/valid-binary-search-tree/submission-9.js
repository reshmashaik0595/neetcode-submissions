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
        function valid(root, lower, upper) {
            if (root == null) return true
            if (root.val <= lower || root.val >= upper) return false
            return valid(root.left, lower, root.val) && valid(root.right, root.val, upper)
        }
        return valid(root, -Infinity, +Infinity)
    }
}
