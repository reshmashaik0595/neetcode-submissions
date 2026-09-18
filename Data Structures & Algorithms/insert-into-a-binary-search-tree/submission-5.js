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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        function insert(root, val) {
            if (root == null) {
                return new TreeNode(val)
            }
            if (val < root.val) {
                root.left = insert(root.left, val)
            } else if (val > root.val) {
                root.right = insert(root.right, val)
            }
            return root

        }

        return insert(root, val)
    }
}
