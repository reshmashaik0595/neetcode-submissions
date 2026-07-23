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
        function dfs(root) {
            if (root === null) {
                return [0, 0]
            }

            let leftN = dfs(root.left)
            let rightN = dfs(root.right)

            let withRoot = root.val + leftN[1] + rightN[1]
            let withoutRoot = Math.max(...leftN) + Math.max(...rightN)

            return [withRoot, withoutRoot]
        }

        return Math.max(...dfs(root))
    }
}
