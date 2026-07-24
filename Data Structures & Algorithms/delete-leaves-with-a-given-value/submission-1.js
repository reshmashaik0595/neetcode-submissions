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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function dfs(root) {
            if (root == null) {
                return null
            }

            root.left = dfs(root.left)
            root.right = dfs(root.right)
            if (root.val == target && root.left == null && root.right == null) {
                return null
            }

            return root

        }

        return dfs(root)
    }
}
