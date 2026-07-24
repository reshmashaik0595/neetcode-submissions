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
            if (root == null) {
                return [0, 0]
            }

            let left = dfs(root.left)
            let right = dfs(root.right)
            let with_root = root.val + left[1] + right[1]
            let without_root = Math.max(...left) + Math.max(...right)
            return [with_root, without_root]
        }
        return Math.max(...dfs(root))
    }

}
