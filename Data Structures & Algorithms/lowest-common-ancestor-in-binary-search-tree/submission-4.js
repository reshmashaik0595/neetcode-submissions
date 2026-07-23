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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(root, p, q) {
            if (root == null) {
                return null
            }
            if (root.val == p.val || root.val == q.val) {
                return root
            }
            let left = dfs(root.left, p, q)
            let right = dfs(root.right, p, q)

            if (left !== null && right !== null) {
                return root
            }

            if (left == null) {
                return right
            }

            return left
        }

        return dfs(root, p, q)
    }
}
