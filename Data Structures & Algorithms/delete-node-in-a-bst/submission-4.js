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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        function deleteN(root, key) {
            if (root == null) return null
            if (root.val > key) {
                root.left = deleteN(root.left, key)
                return root
            } else if (root.val < key) {
                root.right = deleteN(root.right, key)
                return root
            } else {
                if (root.left == null && root.right == null) return null
                if (root.left == null) return root.right
                if (root.right == null) return root.left
                let curr = root.right
                while (curr.left !== null) {
                    curr = curr.left
                }
                root.val = curr.val
                root.right = deleteN(root.right, curr.val)
                return root
            }
        }
        return deleteN(root, key)
    }
}
