class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        function solve(n, trust) {
            let inDegree = new Array(n + 1).fill(0)
            let outDegree = new Array(n + 1).fill(0)
            for (let i = 0; i < trust.length; i++) {
                let u = trust[i][0]
                let v = trust[i][1]
                outDegree[u]++
                inDegree[v]++
            }
            for (let i = 1; i < outDegree.length; i++) {
                if (outDegree[i] == 0 && inDegree[i] == n - 1){
                    return i
                }
            }
            return -1
        }

        return solve(n, trust)
    }
}
