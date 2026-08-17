class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        function adjacentList(numCourses, prerequisites) {
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

        let adjList = adjacentList(numCourses, prerequisites)
        let pMap = new Map()
        for (let i = 0; i < numCourses; i++) {
            dfs(i)
        }

        function dfs(node) {
            if (pMap.has(node)) return pMap.get(node)
            let neigh = adjList[node]
            let pSet = new Set()
            for (let i = 0; i < neigh.length; i++) {
                let nNode = neigh[i]
                pSet.add(nNode)
                let result = dfs(nNode)
                for (let val of result) {
                    pSet.add(val)
                }
            }
            pMap.set(node, pSet)
            return pSet
        }

        let ans = []
        for (let i = 0; i < queries.length; i++) {
            let res = pMap.get(queries[i][0]).has(queries[i][1])
            ans.push(res)

        }
        return ans
    }
}
