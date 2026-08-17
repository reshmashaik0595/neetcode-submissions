class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        function dfs(node) {
            if (isVisited[node]) return
            isVisited[node] = true
            let neigh = adjList[node]
            for (let i = 0; i < neigh.length; i++) {
                dfs(neigh[i])
            }
        }

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
            }
            return adjList
        }

        let adjList = buildAdjacentList(n, edges)
        let isVisited = new Array(n).fill(false)
        let connectedComponents = 0
        for (let i = 0; i < n; i++) {
            if (isVisited[i]) continue
            connectedComponents++
            dfs(i)
        }

        return connectedComponents
    }
}
