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
        // function height(root) {
        //     if (root == null) return -1
        //     let left = height(root.left)
        //     let right = height(root.right)
        //     return 1 + Math.max(left, right)
        // }

        // function isBal(root) {
        //     if (root == null) return true
        //     let leftH = height(root.left)
        //     let rightH = height(root.right)
        //     if (Math.abs(leftH - rightH) >= 2) return false
        //     return isBal(root.left) && isBal(root.right)
        // }

        // return isBal(root)

        function isBal(root) {
            if (root == null) return 0
            let left = isBal(root.left)
            if (left == -1) return -1
            let right = isBal(root.right)
            if (right == -1) return -1
            if (Math.abs(left - right) >= 2) return -1
            return 1 + Math.max(left, right)
        }
        return isBal(root) == -1 ? false : true
    }
}
