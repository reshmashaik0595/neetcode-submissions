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
        function depth(root) {
            if (root == null) return 0
            let left = depth(root.left)
            let right = depth(root.right)
            return 1 + Math.max(left, right)
        }
        return depth(root)
    }
}
