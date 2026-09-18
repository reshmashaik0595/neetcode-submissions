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
    postorderTraversal(root) {
        let result = []
        function postOrder(root){
            if(root == null) return null
            postOrder(root.left)
            postOrder(root.right)
            result.push(root.val)
        }
        postOrder(root)
        return result
    }
}
