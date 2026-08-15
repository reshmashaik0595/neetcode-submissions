class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        function buildAjacentList(numCourses, prerequisites) {
            let adjList = new Array(numCourses + 1)
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

        function dfs(node) {
            if (prerequisitesMap.has(node)) {
                return prerequisitesMap.get(node);
            }

            let set = new Set()
            let neighbors = adjList[node]
            for (let i = 0; i < neighbors.length; i++) {
                let nNode = neighbors[i]
                set.add(nNode)
                let result = dfs(nNode)
                for (let courses of result) {
                    set.add(courses)
                }
            }
            prerequisitesMap.set(node, set);
            return set
        }

        let adjList = buildAjacentList(numCourses, prerequisites)
        let prerequisitesMap = new Map()
        for (let i = 0; i < numCourses; i++) {
            dfs(i)
        }

        let answer = new Array(queries.length).fill(false)
        for (let i = 0; i < queries.length; i++) {
            answer[i] = prerequisitesMap.get(queries[i][0]).has(queries[i][1])
        }
        return answer
    }
}
