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
    rightSideView(root) {
        function solve(root) {
            if (root == null) return []
            let queue = [root]
            let front = 0
            let ans = []
            while (front < queue.length) {
                let len = queue.length - front
                for (let i = 0; i < len; i++) {
                    let node = queue[front++]
                    if (i == len - 1) ans.push(node.val)
                    if (node.left) queue.push(node.left)
                    if (node.right) queue.push(node.right)
                }
            }
            return ans
        }
        return solve(root)
    }
}
