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
        function solve(key, root) {
            if (root == null) {
                return null
            }
            if (key < root.val) {
                root.left = solve(key, root.left)
            } else if (key > root.val) {
                root.right = solve(key, root.right)
            } else {
                if (root.left == null && root.right == null) {
                    return null
                }
                if (root.left == null) {
                    return root.right
                } else if (root.right == null) {
                    return root.left
                } else {
                    let tmp = root.left
                    while (tmp.right !== null) {
                        tmp = tmp.right
                    }
                    root.val = tmp.val
                    root.left = solve(tmp.val, root.left)
                    return root
                }
            }
            return root
        }
        return solve(key, root)
    }
}
