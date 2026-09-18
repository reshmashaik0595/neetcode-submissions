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
        if (root == null) return null
        function solve(root, p, q) {
            if (root == null) return null
            if (p.val < root.val && q.val < root.val) {
                return solve(root.left, p, q)
            } else if (p.val > root.val && q.val > root.val) {
                return solve(root.right, p, q)
            } else {
                return root
            }
        }
        return solve(root, p, q)
    }
}
