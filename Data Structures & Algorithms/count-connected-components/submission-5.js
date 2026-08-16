class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        function buildAjdacentList(n, edges) {
            let adjList = new Array(n)
            for (let i = 0; i < adjList.length; i++) {
                adjList[i] = []
            }
            for (let i = 0; i < edges.length; i++) {
                let u = edges[i][0]
                let v = edges[i][1]
                adjList[u].push(v)
                adjList[v].push(u)
            }
            return adjList
        }

        function dfs(node) {
            if (isVisited[node]) return
            isVisited[node] = true
            let neighbors = adjList[node]
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                dfs(nNode)
            }
        }
        let adjList = buildAjdacentList(n, edges)
        let isVisited = new Array(n).fill(false)
        let connectedComponents = 0
        for (let i = 0; i < n; i++) {
            if (!isVisited[i]) {
                connectedComponents++
                dfs(i)
            }
        }
        return connectedComponents
    }
}
