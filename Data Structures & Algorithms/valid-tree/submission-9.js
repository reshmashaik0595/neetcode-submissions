class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adjList = this.adjacencyList(n, edges);
        if (!this.connectedComponent(n, adjList)) return false;
        if (this.hasCycle(n, adjList)) return false;
        return true;
    }

    adjacencyList(n, edges) {
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

    connectedComponent(n, adjList) {
        let components = 0;
        let isVisited = new Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            if (isVisited[i]) continue;
            components++;
            this.dfs(i, adjList, isVisited);
        }
        return components == 1;
    }

    dfs(node, adjList, isVisited) {
        if (isVisited[node]) return;
        isVisited[node] = true;
        let neighbors = adjList[node];
        for (let i = 0; i < neighbors.length; i++) {
            this.dfs(neighbors[i], adjList, isVisited);
        }
    }

    dfsToDetectCycle(node, parent, adjList, isVisited) {
        if (isVisited[node]) return true;
        isVisited[node] = true;
        let neighbors = adjList[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (parent == neighbors[i]) continue;
            if (this.dfsToDetectCycle(neighbors[i], node, adjList, isVisited)) {
                return true;
            }
        }
        return false;
    }

    hasCycle(n, adjList) {
        let isVisited = new Array(n).fill(false);
        if (this.dfsToDetectCycle(0, -1, adjList, isVisited)) return true;
        return false;
    }
}
