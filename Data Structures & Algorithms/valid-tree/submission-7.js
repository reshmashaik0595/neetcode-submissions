class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // Single Connected Component
        // No Cycle
        // Undirected Graph

        function adjacencyList() {
            let adjList = new Array(n);
            for (let i = 0; i < adjList.length; i++) {
                adjList[i] = [];
            }
            for (let i = 0; i < edges.length; i++) {
                let u = edges[i][0];
                let v = edges[i][1];
                adjList[u].push(v);
                adjList[v].push(u);
            }
            return adjList;
        }
        let adjList = adjacencyList();
        let isVisited = new Array(n).fill(false);

        function dfs(node) {
            if (isVisited[node]) return;
            isVisited[node] = true;
            let neigh = adjList[node];
            for (let i = 0; i < neigh.length; i++) {
                dfs(neigh[i]);
            }
        }

        function hasCycle(node, parent = -1) {
            isVisited[node] = true;
            let neigh = adjList[node];
            for (let i = 0; i < neigh.length; i++) {
                if (neigh[i] == parent) continue;
                if (isVisited[neigh[i]]) return true;
                if (hasCycle(neigh[i], node)) {
                    return true;
                }
            }
            return false;
        }

        let components = 0;
        for (let i = 0; i < n; i++) {
            if (isVisited[i]) continue;
            components++;
            dfs(i);
        }
        if (components > 1) return false;

        isVisited = new Array(n).fill(false);
        if (hasCycle(0)) return false;

        return true;
    }
}
