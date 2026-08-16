class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
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
            if (isCurrRecursion[node]) return true
            if (isVisited[node]) return false
            isCurrRecursion[node] = true
            isVisited[node] = true
            let neighbors = adjList[node]
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                if (dfs(nNode)) return true
            }
            order.push(node)
            isCurrRecursion[node] = false
            return false
        }

        let isVisited = new Array(numCourses).fill(false)
        let isCurrRecursion = new Array(numCourses).fill(false)
        let adjList = buildAdjacentList(numCourses, prerequisites)
        let order = []
        for (let i = 0; i < numCourses; i++) {
            if (isVisited[i]) continue
            if (dfs(i)) return []
        }
        return order.reverse()
    }
}
