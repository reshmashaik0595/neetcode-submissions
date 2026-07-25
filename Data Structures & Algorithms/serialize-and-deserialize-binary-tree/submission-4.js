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
        if (root == null) {
            return []
        }
        let ans = []
        function dfs(root) {
            if (root == null) {
                ans.push(null)
                return
            }
            ans.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
        dfs(root)
        return ans
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let idx = 0
        function dfs() {
            if (data[idx] == null) {
                idx++
                return null
            }
            let node = new TreeNode(data[idx])
            idx++
            node.left = dfs()
            node.right = dfs()
            return node
        }
        return dfs()
    }
}
