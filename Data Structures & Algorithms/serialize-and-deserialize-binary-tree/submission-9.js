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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (root == null) return []
        function solve(root) {
            if (root == null) return null
            let queue = [root]
            let front = 0
            while (front < queue.length) {
                let node = queue[front++]
                if (node == null) {
                    result.push(null)
                    continue
                }
                result.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        let result = []
        solve(root)
        return result
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data.length == 0) return null
        function solve() {
            let root = new TreeNode(data[0])
            let queue = [root]
            let front = 0
            let idx = 1
            while (front < queue.length) {
                let node = queue[front++]
                if (data[idx] !== null) {
                    node.left = new TreeNode(data[idx])
                    queue.push(node.left)
                }
                idx++
                if (data[idx] !== null) {
                    node.right = new TreeNode(data[idx])
                    queue.push(node.right)
                }
                idx++
            }
            return root
        }
        return solve()
    }
}
