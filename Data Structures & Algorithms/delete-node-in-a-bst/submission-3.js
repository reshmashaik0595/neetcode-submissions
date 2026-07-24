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
        if (root == null) {
            return null
        }
        function dfs(root, key) {
            if (root == null) {
                return null
            }
            if (root.val > key) {
                root.left = dfs(root.left, key)
                return root
            } else if (root.val < key) {
                root.right = dfs(root.right, key)
                return root
            } else {
                if (root.left == null && root.right == null) return null
                else if (!root.left) return root.right
                else if (!root.right) return root.left
                else {
                    let curr = root.right
                    while (curr.left !== null) {
                        curr = curr.left
                    }
                    root.val = curr.val
                    root.right = dfs(root.right, root.val)
                    return root
                }
            }
        }
        return dfs(root, key)
    }
}
