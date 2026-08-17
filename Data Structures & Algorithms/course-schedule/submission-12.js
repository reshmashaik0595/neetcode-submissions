class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        function dfs(node) {
            if (isCurrRecursion[node]) return true
            if (isVisited[node]) return false

            isVisited[node] = true
            isCurrRecursion[node] = true
            let neigh = adjList[node]
            for (let i = 0; i < neigh.length; i++) {
                if (dfs(neigh[i])) return true
            }
            isCurrRecursion[node] = false
            return false
        }

        function buildAdjacentList(numCourses, prerequisites) {
            let adjList = new Array(numCourses)
            for (let i = 0; i < adjList.length; i++) {
                adjList[i] = []
            }
            for (let i = 0; i < prerequisites.length; i++) {
                let u = prerequisites[i][0]
                let v = prerequisites[i][1]
                adjList[u].push(v)
            }
            return adjList
        }

        let adjList = buildAdjacentList(numCourses, prerequisites)
        let isVisited = new Array(numCourses).fill(false)
        let isCurrRecursion = new Array(numCourses).fill(false)
        for (let i = 0; i < numCourses; i++) {
            if (isVisited[i]) continue
            if (dfs(i)) return false
        }
        return true
    }
}
