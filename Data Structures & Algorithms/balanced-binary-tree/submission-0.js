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
        if (root == null) {
            return true
        }
        function dfs(root) {
            if (root == null) {
                return true
            }

            let left = height(root.left)
            let right = height(root.right)

            if (Math.abs(left - right) > 1) {
                return false
            }

            return dfs(root.left) && dfs(root.right)
        }

        function height(root) {
            if (root == null) {
                return -1
            }

            let left = height(root.left)
            let right = height(root.right)
            return 1 + Math.max(left, right)
        }
        return dfs(root)
    }
}
