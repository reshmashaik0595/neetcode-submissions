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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root == null) return []
        function solve(root) {
            if (root == null) return null
            let queue = [root]
            let front = 0
            while (front < queue.length) {
                let level = []
                let qLen = queue.length - front
                for (let i = 0; i < qLen; i++) {
                    let node = queue[front++]
                    level.push(node.val)
                    if (node.left) queue.push(node.left)
                    if (node.right) queue.push(node.right)
                }
                result.push(level)
            }
        }
        let result = []
        solve(root)
        return result
    }
}
