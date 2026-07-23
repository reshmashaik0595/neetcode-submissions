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
        let ans = 0
        function dfs(root) {
            if (root == null) return -1

            let left = dfs(root.left)
            let right = dfs(root.right)
            ans = Math.max(ans, left + right + 2)
            return 1 + Math.max(left, right)
        }
        dfs(root)
        return ans
    }
}
