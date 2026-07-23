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
        let op = []
        let queue = [root]
        let front = 0
        while (front < queue.length) {
            let cnt = queue.length - front
            let level = []
            for (let i = 0; i < cnt; i++) {
                let node = queue[front++]
                level.push(node.val)
                if (node.left) {
                    queue.push(node.left)
                }

                if (node.right) {
                    queue.push(node.right)
                }
            }
            op.push(level)
        }
        return op
    }
}
