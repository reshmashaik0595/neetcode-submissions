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
    diameterOfBinaryTree(root) {
        function height(root) {
            if (root == null) return -1
            let left = height(root.left)
            let right = height(root.right)
            diameter = Math.max(diameter, left + right + 2)
            return 1 + Math.max(left, right)
        }

        let diameter = -Infinity
        height(root)
        return diameter
    }
}
