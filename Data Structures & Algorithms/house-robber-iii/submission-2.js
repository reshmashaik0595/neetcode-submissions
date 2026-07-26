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
            let left = dfs(root.left)
            let right = dfs(root.right)

            let withRoot = root.val + left[1] + right[1]
            let withoutRoot = Math.max(...left) + Math.max(...right)

            return [withRoot,withoutRoot]
        }
        return Math.max(...dfs(root))
    }
}
