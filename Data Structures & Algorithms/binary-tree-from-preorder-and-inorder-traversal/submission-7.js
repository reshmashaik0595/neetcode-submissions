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
        function solve(preorder, inorder, st, en) {
            if (st > en) return null
            let root = new TreeNode(preorder[idx])
            let i = st
            for (i = st; i < inorder.length; i++) {
                if (inorder[i] == preorder[idx]) {
                    break
                }
            }
            idx++
            root.left = solve(preorder, inorder, st, i - 1)
            root.right = solve(preorder, inorder, i + 1, en)
            return root
        }
        let st = 0
        let en = preorder.length - 1
        let idx = 0
        return solve(preorder, inorder, st, en)
    }
}
