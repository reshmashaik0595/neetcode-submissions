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
        let idx = 0
        function dfs(preorder, inorder, start, end) {
            if (start > end) {
                return null
            }

            let i = start
            for (i = start; i <= end; i++) {
                if (preorder[idx] == inorder[i]) {
                    break;
                }
            }

            let root = new TreeNode(preorder[idx])
            idx++
            root.left = dfs(preorder, inorder, start, i - 1)
            root.right = dfs(preorder, inorder, i + 1, end)
            return root
        }
        return dfs(preorder, inorder, 0, preorder.length - 1)
    }
}
