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
        let res = []
        function dfs(root) {
            if (root == null) {
                res.push(null)
                return
            }
            res.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
        dfs(root)
        return res

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
                idx++;
                return null;
            }
            let root = new TreeNode(data[idx])
            idx++
            root.left = dfs()
            root.right = dfs()
            return root
        }
        return dfs()
    }
}
