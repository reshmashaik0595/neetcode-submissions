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
        function solve(node, maxSoFar) {
            if (node == null) return null
            if (node.val >= maxSoFar) count++
            maxSoFar = Math.max(maxSoFar, node.val)
            solve(node.left, maxSoFar)
            solve(node.right, maxSoFar)
        }
        let count = 0
        solve(root, -Infinity)
        return count
    }
}
