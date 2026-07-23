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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function dfs(root, target) {
            if (root == null) {
                return null
            }



            root.left = dfs(root.left, target)
            root.right = dfs(root.right, target)

            if (root.val == target && !root.left && !root.right) {
                return null
            }
            return root

        }
        return dfs(root, target)
    }


}
