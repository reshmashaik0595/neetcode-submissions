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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let cnt = 0
        let ans;
        function dfs(root) {
            if (root == null) {
                return null
            }

            dfs(root.left)
            cnt++
            if (cnt == k) {
                ans = root.val
            }
            dfs(root.right)
        }
        dfs(root)
        return ans
    }
}
