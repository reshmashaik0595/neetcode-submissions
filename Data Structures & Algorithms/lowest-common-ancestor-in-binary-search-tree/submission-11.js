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
        // function solve(root, p, q) {
        //     if (root == null) return null
        //     if (root.val == p.val || root.val == q.val) return root
        //     let left = solve(root.left, p, q)
        //     let right = solve(root.right, p, q)
        //     if (left !== null && right !== null) return root
        //     if (left !== null) return left
        //     return right
        // }
        // return solve(root, p, q)
        function solve(root, p, q) {
            if (root == null) return null
            if (root.val > p.val && root.val > q.val) {
                return solve(root.left, p, q)
            } else if (root.val < p.val && root.val < q.val) {
                return solve(root.right, p, q)
            } else {
                return root
            }
        }
        return solve(root, p, q)
    }
}
