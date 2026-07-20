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
        if (root == null) return []
        this.ans = []
        this.solve(root)
        return this.ans
    }

    solve(root) {
        if (root == null) return
        this.solve(root.left)
        this.solve(root.right)
        this.ans.push(root.val)
    }
}
