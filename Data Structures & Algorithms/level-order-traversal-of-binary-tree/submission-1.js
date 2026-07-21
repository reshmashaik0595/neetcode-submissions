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
        if (root == null) {
            return []
        }
        let ans = []
        let queue = []
        queue.push(root)
        let front = 0
        while (front < queue.length) {
            let currLen = queue.length - front
            let level = []
            for (let i = 0; i < currLen; i++) {
                let currNode = queue[front]
                level.push(currNode.val)
                if (currNode.left) {
                    queue.push(currNode.left)
                }
                if (currNode.right) {
                    queue.push(currNode.right)
                }
                front++
            }
            ans.push(level)
        }
        return ans
    }
}
