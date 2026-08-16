class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        function buildAdjacentList(numCourses, prerequisites) {
            let adjList = new Array(numCourses)
            for (let i = 0; i < adjList.length; i++) {
                adjList[i] = []
            }
            for (let i = 0; i < prerequisites.length; i++) {
                let u = prerequisites[i][0]
                let v = prerequisites[i][1]
                adjList[v].push(u)
            }
            return adjList
        }

        function dfs(node) {
            if (isCurrPath[node]) return true
            if (isVisited[node]) return false
            isVisited[node] = true
            isCurrPath[node] = true
            let neigbors = adjList[node]
            for (let i = 0; i < neigbors.length; i++) {
                let nNode = neigbors[i]
                if (dfs(nNode)) return true
            }
            isCurrPath[node] = false
            return false
        }

        let adjList = buildAdjacentList(numCourses, prerequisites)
        let isVisited = new Array(numCourses).fill(false)
        let isCurrPath = new Array(numCourses).fill(false)
        for (let i = 0; i < numCourses; i++) {
            if (isVisited[i]) continue
            if (dfs(i)) return false
        }

        return true

    }
}
