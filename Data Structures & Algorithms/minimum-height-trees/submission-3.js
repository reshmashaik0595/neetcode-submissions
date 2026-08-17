class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if (n === 1) return [0]

        function buildAdjacentList(n, edges) {
            let adjList = new Array(n)
            for (let i = 0; i < adjList.length; i++) {
                adjList[i] = []
            }
            for (let i = 0; i < edges.length; i++) {
                let u = edges[i][0]
                let v = edges[i][1]
                adjList[u].push(v)
                adjList[v].push(u)
                inDegree[u]++
                inDegree[v]++

            }
            return adjList;
        }
        let inDegree = new Array(n).fill(0)
        let adjList = buildAdjacentList(n, edges)
        let queue = []
        for (let i = 0; i < inDegree.length; i++) {
            if (inDegree[i] == 1) {
                queue.push(i)
            }
        }

        let front = 0
        let remainingNodes = n
        while (remainingNodes > 2) {
            let len = queue.length - front
            remainingNodes = remainingNodes - len
            for (let i = 0; i < len; i++) {
                let node = queue[front++]
                let neigbors = adjList[node]
                for (let j = 0; j < neigbors.length; j++) {
                    let nNode = neigbors[j]
                    inDegree[nNode]--
                    if (inDegree[nNode] == 1) {
                        queue.push(nNode)
                    }
                }
            }
        }
        return queue.slice(front)
    }
}
