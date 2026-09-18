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
    goodNodes(root) {
        if (root == null) return 0
        function solve(root, max = root.val) {
            if (root == null) return 0
            if (root.val >= max) count++
            solve(root.left, Math.max(root.val, max))
            solve(root.right, Math.max(root.val, max))
        }
        let count = 0
        solve(root)
        return count
    }
}
