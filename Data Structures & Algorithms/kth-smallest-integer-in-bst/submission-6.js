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
        this.cnt = 0
        return this.solve(root, k)
    }
    solve(root, k) {
        if (root == null) {
            return null;
        }

        let left = this.solve(root.left, k)
        if (left !== null) {
            return left
        }
        this.cnt++
        if (this.cnt == k) {
            return root.val
        }
        let right = this.solve(root.right, k)
        if (right !== null) {
            return right
        }
        return null
    }
}
