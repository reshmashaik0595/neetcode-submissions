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
    rob(root) {
        function solve(root) {
            if (root == null) return [0, 0]
            let left = solve(root.left)
            let right = solve(root.right)
            let steal = root.val + left[1] + right[1]
            let skip = Math.max(...left) + Math.max(...right)
            return [steal, skip]
        }
        return Math.max(...solve(root))
    }
}
