class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        function buildGraph(numCourses, prerequisites) {
            let adjList = new Array(numCourses + 1)
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

        function detectCycle(node) {
            if (isRecursion[node]) return true
            if (isVisited[node]) return false
        
            isVisited[node] = true
            isRecursion[node] = true
            let neigh = adjList[node]
            for (let i = 0; i < neigh.length; i++) {
                let nNode = neigh[i]
                if (detectCycle(nNode)) return true
            }
            isRecursion[node] = false
            return false
        }

        let adjList = buildGraph(numCourses, prerequisites)
        let isVisited = new Array(numCourses + 1).fill(false)
        let isRecursion = new Array(numCourses + 1).fill(false)
        for (let i = 0; i <= numCourses; i++) {
            if (detectCycle(i)) {
                return false
            }
        }

        return true
    }
}
