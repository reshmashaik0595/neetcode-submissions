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
        function dfs(root) {
            if (root == null) {
                ans.push(null)
                return null
            }
            ans.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
        let ans = []
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
        function solve() {
            if (data[idx] == null) {
                idx++
                return null
            }
            let root = new TreeNode(data[idx])
            idx++
            root.left = solve()
            root.right = solve()
            return root
        }
        let idx = 0
        return solve()
    }
}
