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
    diameterOfBinaryTree(root) {
        if (root == null) return 0
        let ans = -Infinity
        function solve(root) {
            if (root == null) return 0

            let left = solve(root.left)
            let right = solve(root.right)
            ans = Math.max(left + right, ans)
            return 1 + Math.max(left, right);
        }
        solve(root)
        return ans
    }
}
