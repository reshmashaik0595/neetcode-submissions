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
        if (root == null) {
            return []
        }

        let queue = [root]
        let ans = []
        let front = 0
        while (front < queue.length) {
            let len = queue.length - front
            for (let i = 0; i < len; i++) {
                let currNode = queue[front]
                if (i == len - 1) {
                    ans.push(currNode.val)
                }
                if (currNode.left) {
                    queue.push(currNode.left)
                }
                if (currNode.right) {
                    queue.push(currNode.right)
                }
                front++
            }
        }
        return ans
    }
}
