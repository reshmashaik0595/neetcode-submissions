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
     * @return {number[]}
     */
    inorderTraversal(root) {
        let result = []
        function solve(root){
            if(root == null) return null
            solve(root.left)
            result.push(root.val)
            solve(root.right)
        }
        solve(root)
        return result
    }
}
