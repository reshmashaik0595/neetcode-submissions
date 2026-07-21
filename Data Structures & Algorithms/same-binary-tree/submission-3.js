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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        return this.solve(p, q)
    }
    solve(root1, root2) {
        if (root1 == null && root2 == null) {
            return true
        }

        if ((root1 == null && root2 !== null) || (root2 == null && root1 !== null)) {
            return false
        }

        if (root1.val !== root2.val) {
            return false
        }

        return this.solve(root1.left, root2.left) && this.solve(root1.right, root2.right)
    }
}
