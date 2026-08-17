class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let adjList = new Array(n + 1)
        for (let i = 0; i < n + 1; i++) {
            adjList[i] = []
        }
        let inDegree = new Array(n + 1).fill(0)
        let outDegree = new Array(n + 1).fill(0)
        for (let i = 0; i < trust.length; i++) {
            let u = trust[i][0]
            let v = trust[i][1]
            adjList[u].push(v)
            outDegree[u]++
            inDegree[v]++
        }
        for (let i = 1; i < inDegree.length; i++) {
            if (inDegree[i] == n - 1 && outDegree[i] == 0) {
                return i
            }
        }
        return -1
    }
}
