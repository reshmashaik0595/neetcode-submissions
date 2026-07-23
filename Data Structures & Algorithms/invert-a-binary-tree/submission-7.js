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
     * @return {TreeNode}
     */
    invertTree(root) {
        function invert(root) {
            if (root == null) return
            let tmp = root.left
            root.left = root.right
            root.right = tmp
            invert(root.left)
            invert(root.right)
        }
        invert(root)
        return root
    }
}
