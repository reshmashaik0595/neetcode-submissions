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
        this.idx = 0
        return this.solve(preorder, inorder, 0, preorder.length - 1, this.idx)
    }

    solve(preorder, inorder, start, end, idx) {
        if (start > end) {
            return null
        }



        let i = start
        for (i = start; i <= end; i++) {
            if (inorder[i] == preorder[idx]) {
                break
            }
        }
        let root = new TreeNode(preorder[idx])
        this.idx++
        root.left = this.solve(preorder, inorder, start, i - 1, this.idx)
        root.right = this.solve(preorder, inorder, i + 1, end, this.idx)

        return root
    }
}
