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
                let inD = trust[i][1]
                let outD = trust[i][0]
                inDegree[inD]++
                outDegree[outD]++
            }
            for (let i = 1; i <= n; i++) {
                if (inDegree[i] == n - 1 && outDegree[i] == 0)
                    return i
            }
            return -1
        }

        return solve(n, trust)
    }
}
