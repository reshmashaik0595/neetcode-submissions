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
        function dfs(root) {
            if (root == null) {
                return null
            }

            let left = dfs(root.left)
            if (left !== null) {
                return left
            }
            cnt++
            if (cnt == k) {
                return root.val
            }
            let right = dfs(root.right)
            if (right !== null) {
                return right
            }
            return null
        }
        return dfs(root)
    }
}
