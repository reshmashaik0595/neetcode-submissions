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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        function solve(root, val) {
            if (root == null) {
                return new TreeNode(val)
            }
            if (root.val < val) {
                root.right = solve(root.right, val)
            } else {
                root.left = solve(root.left, val)
            }
            return root
        }

        return solve(root, val)
    }
}
