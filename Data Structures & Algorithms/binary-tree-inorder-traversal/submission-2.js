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
        let ans = []
        function dfs(root) {
            if (root == null) return

            dfs(root.left)
            ans.push(root.val)
            dfs(root.right)
        }
        dfs(root)
        return ans
    }
}
