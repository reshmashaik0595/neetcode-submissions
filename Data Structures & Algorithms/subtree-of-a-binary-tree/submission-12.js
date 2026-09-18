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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (subRoot == null) return true
        if (root == null) return false

        function sameTree(p, q) {
            if (p == null && q == null) return true
            if (p == null && q !== null) return false
            if (p !== null && q == null) return false
            if (p.val !== q.val) return false
            return sameTree(p.left, q.left) && sameTree(p.right, q.right)
        }

        function solve(root, subRoot) {
            if(root == null) return false
            if(sameTree(root,subRoot)){
                return true
            }
            return solve(root.left,subRoot) || solve(root.right,subRoot)
        }
        return solve(root, subRoot)
    }
}
