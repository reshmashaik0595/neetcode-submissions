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
            if (root == null) {
                return null
            }

            if (root.val > key) {
                root.left = deleteN(root.left, key)
                return root
            } else if (root.val < key) {
                root.right = deleteN(root.right, key)
                return root
            } else {
                if (root.left == null && root.right == null) {
                    return null
                } else if (root.left == null) {
                    return root.right
                } else if (root.right == null) {
                    return root.left
                } else {
                    let curr = root.left
                    while (curr.right !== null) {
                        curr = curr.right
                    }
                    root.val = curr.val
                    root.left = deleteN(root.left, root.val)
                }
                return root
            }
        }

        return deleteN(root, key)
    }
}
