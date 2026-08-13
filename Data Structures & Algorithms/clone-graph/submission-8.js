/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node == null) return null

        function dfs(node, cNode) {
            if (node == null) return null
            let neighbors = node.neighbors
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                if (!nodeMap.has(nNode)) {
                    let cNNode = new Node(nNode.val)
                    nodeMap.set(nNode, cNNode)
                    cNode.neighbors.push(cNNode)
                    dfs(nNode, cNNode)
                } else {
                    cNode.neighbors.push(nodeMap.get(nNode))
                }
            }
        }
        let cNode = new Node(node.val)
        let nodeMap = new Map()
        nodeMap.set(node, cNode)
        dfs(node, cNode)
        return cNode || []
    }
}
