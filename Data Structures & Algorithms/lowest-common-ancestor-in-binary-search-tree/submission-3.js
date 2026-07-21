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
        if (root == null) {
            return null
        }

        if (root.val == p.val || root.val == q.val) {
            return root
        }

        let left = this.lowestCommonAncestor(root.left, p, q)
        let right = this.lowestCommonAncestor(root.right, p, q)

        if (left !== null && right !== null) {
            return root
        }

        if (left !== null) {
            return left
        }

        // if (right !== null) {
            return right
        // }
        // return null;
    }
}
