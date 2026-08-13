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
        function solve(root, key) {
            if (root == null) return null
            if (root.val < key) {
                root.right = solve(root.right, key)
                return root
            } else if (root.val > key) {
                root.left = solve(root.left, key)
                return root
            } else {
                if (root.left == null && root.right == null) return null
                if (root.left == null) return root.right
                if (root.right == null) return root.left
                let temp = root.left
                while (temp.right !== null) {
                    temp = temp.right
                }
                root.val = temp.val
                root.left = solve(root.left, root.val)
                return root
            }
        }
        return solve(root, key)
    }
}
