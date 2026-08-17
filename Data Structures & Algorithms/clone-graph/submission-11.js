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
        let nodeMap = new Map()
        let cloneNode = new Node(node.val)
        nodeMap.set(node, cloneNode)
        function dfs(node, cloneNode) {
            let neigh = node.neighbors
            for (let i = 0; i < neigh.length; i++) {
                let nNode = neigh[i]
                if (nodeMap.has(nNode)) {
                    let cNode = nodeMap.get(nNode)
                    cloneNode.neighbors.push(cNode)
                } else {
                    let cNode = new Node(nNode.val)
                    nodeMap.set(nNode, cNode)
                    cloneNode.neighbors.push(cNode)
                    dfs(nNode, cNode)
                }
            }
        }
        dfs(node, cloneNode)
        return cloneNode
    }
}
