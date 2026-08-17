class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        function adjacentList(n, edges) {
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

        function dfs(node, parent) {
            if (isVisited[node]) return true
            isVisited[node] = true
            let neigh = adjList[node]
            for (let i = 0; i < neigh.length; i++) {
                if (neigh[i] == parent) continue
                if (dfs(neigh[i], node)) return true
            }
            return false
        }

        let adjList = adjacentList(n, edges)
        let isVisited = new Array(n).fill(false)
        let connectComponents = 0
        for (let i = 0; i < n; i++) {
            if (isVisited[i]) continue
            connectComponents++
            if (dfs(i, null)) return false
        }
        if (connectComponents > 1) return false
        return true
    }
}
