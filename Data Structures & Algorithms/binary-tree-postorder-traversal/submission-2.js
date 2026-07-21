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
    postorderTraversal(root) {
        let ans = []
        function dfs(root) {
            if (root == null) return null

            dfs(root.left)
            dfs(root.right)
            ans.push(root.val)
        }
        dfs(root)
        return ans
    }
}
