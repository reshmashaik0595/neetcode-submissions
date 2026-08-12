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
        function solve(root) {
            if (root == null) return null
            let tmp = root.left
            root.left = root.right
            root.right = tmp
            solve(root.left)
            solve(root.right)
            return root
        }
        return solve(root)
    }
}
