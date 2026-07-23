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
        function dfs(root, max) {
            if (root === null) {
                return 0
            }
            let cnt = 0
            if (root.val >= max) {
                cnt = 1
            }
            max = Math.max(max, root.val)
            return cnt + dfs(root.left, max) + dfs(root.right, max)
        }

        return dfs(root, root.val)
    }
}
