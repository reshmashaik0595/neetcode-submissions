class Solution {
    /**
     * @param {number[]} stoneValue
     * @return {string}
     */
    stoneGameIII(stoneValue) {
        function solve(i) {
            if (i >= stoneValue.length) return 0
            if (dp[i] !== -1) return dp[i]
            let max = stoneValue[i] - solve(i + 1)
            if (i + 1 < stoneValue.length)
                max = Math.max(max, (stoneValue[i] + stoneValue[i + 1]) - solve(i + 2))
            if (i + 2 < stoneValue.length)
                max = Math.max(max, (stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2]) - solve(i + 3))
            return dp[i] = max
        }
        let dp = new Array(stoneValue.length).fill(-1)
        let ans = solve(0)
        return ans == 0 ? 'Tie' : ans > 0 ? 'Alice' : 'Bob'
    }
}
