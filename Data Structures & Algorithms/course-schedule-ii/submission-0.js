class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        function bfs(node) {
            if (isVisited[node]) return
            isVisited[node] = true
            let neighbors = adjacentList[node]
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                bfs(nNode)
            }
            ans.push(node)
        }

        function detectCycle(node) {
            if (isCurrRecursionPath[node]) return true
            if (isVisited[node]) return false
            isVisited[node] = true
            isCurrRecursionPath[node] = true
            let neighbors = adjacentList[node]
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                if (detectCycle(nNode)) {
                    return true
                }
            }
            isCurrRecursionPath[node] = false
            ans.push(node)
            return false
        }

        function buildAdjacentList(numCourses, prerequisites) {
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

        let adjacentList = buildAdjacentList(numCourses, prerequisites)
        let isVisited = new Array(numCourses + 1).fill(false)
        let isCurrRecursionPath = new Array(numCourses + 1).fill(false)
        let ans = []
        for (let i = 0; i < numCourses; i++) {
            if (detectCycle(i)) {
                return []
            }
        }
        return ans.reverse()
    }
}
