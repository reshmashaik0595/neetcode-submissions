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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function solve(preorder, inorder, start, end) {
            if (start > end) return null
            let i = start
            for (i = start; i < inorder.length; i++) {
                if (preorder[idx] == inorder[i]) {
                    break
                }
            }
            let root = new TreeNode(preorder[idx])
            idx++
            root.left = solve(preorder, inorder, start, i - 1)
            root.right = solve(preorder, inorder, i + 1, end)
            return root

        }
        let idx = 0
        return solve(preorder, inorder, 0, preorder.length - 1)
    }
}
