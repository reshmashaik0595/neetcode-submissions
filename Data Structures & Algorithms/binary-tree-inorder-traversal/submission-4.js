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
     * @return {number[]}
     */
    inorderTraversal(root) {
        function dfs(root) {
            if (root == null) return null
            dfs(root.left)
            ans.push(root.val)
            dfs(root.right)
        }
        let ans = []
        dfs(root)
        return ans
    }
}
