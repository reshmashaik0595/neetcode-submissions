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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root == null) return null

        function dfs(root) {
            if (root == null) return

            let tmp = root.left
            root.left = root.right
            root.right = tmp

            dfs(root.left)
            dfs(root.right)
        }

        dfs(root)
        return root
    }
}
