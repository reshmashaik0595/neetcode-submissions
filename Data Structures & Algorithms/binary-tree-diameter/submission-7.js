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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(root == null) return null
        let diameter = 0
        function solve(root){
            if(root === null) return -1
            let left = 1 + solve(root.left)
            let right = 1 + solve(root.right)
            let currDiameter = left + right 
            diameter = Math.max(diameter, currDiameter)
            return Math.max(left, right)
        }
        solve(root)
        return diameter
    }
}
