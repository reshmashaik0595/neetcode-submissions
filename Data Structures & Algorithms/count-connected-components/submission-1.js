class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        function buildAdjList(n, edges) {
            let adjList = new Array(n + 1)
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

        function dfs(node, adjList) {
            if (isVisited[node]) return
            isVisited[node] = true
            let neigh = adjList[node]
            for (let i = 0; i < neigh.length; i++) {
                if (isVisited[neigh[i]]) continue
                dfs(neigh[i], adjList)
            }
        }

        let isVisited = new Array(n).fill(false)
        let adjList = buildAdjList(n, edges)
        console.log(adjList)
        let count = 0
        for (let i = 0; i < n; i++) {
            if (isVisited[i]) continue
            count++
            dfs(i, adjList)
        }
        return count
    }
}
