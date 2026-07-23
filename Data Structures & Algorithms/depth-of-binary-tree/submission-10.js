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
        function dfs(root, depth) {
            if (root == null) return 0
            return Math.max( 1+ dfs(root.left, depth + 1)
                , 1 + dfs(root.right, depth + 1))
        }
        return dfs(root, 0)
    }
}
