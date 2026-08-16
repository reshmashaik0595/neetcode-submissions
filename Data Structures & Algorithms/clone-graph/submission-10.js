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

        function dfs(node, cloneNode) {
            let neighbors = node.neighbors
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                if (nodeMap.has(nNode)) { // Already cloned
                    cloneNode.neighbors.push(nodeMap.get(nNode))
                } else { // Not cloned
                    let nCloneNode = new Node(nNode.val)
                    nodeMap.set(nNode, nCloneNode)
                    cloneNode.neighbors.push(nodeMap.get(nNode))
                    dfs(nNode, nCloneNode)
                }
            }
        }
        let nodeMap = new Map()
        let cloneNode = new Node(node.val)
        nodeMap.set(node, cloneNode)
        dfs(node, cloneNode)
        return cloneNode
    }
}
