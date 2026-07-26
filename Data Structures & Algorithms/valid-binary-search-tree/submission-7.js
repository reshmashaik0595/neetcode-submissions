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
        function validate(root, lower, upper) {
            if (root == null) return true
            if (root.val <= lower || root.val >= upper) return false
            return validate(root.left, lower, root.val) && validate(root.right, root.val, upper)
        }
        return validate(root, -Infinity, +Infinity)
    }
}
