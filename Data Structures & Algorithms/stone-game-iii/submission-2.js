class Solution {
    /**
     * @param {number[]} stoneValue
     * @return {string}
     */
    stoneGameIII(stoneValue) {
        function solve(idx) {
            if (idx >= stoneValue.length) return 0
            if (dp[idx] !== -1) return dp[idx]
            let max = stoneValue[idx] - solve(idx + 1)
            if (idx + 1 < stoneValue.length) max = Math.max(max, stoneValue[idx] + stoneValue[idx + 1] - solve(idx + 2))
            if (idx + 2 < stoneValue.length) max = Math.max(max, stoneValue[idx] + stoneValue[idx + 1] + stoneValue[idx + 2] - solve(idx + 3))
            return dp[idx] = max
        }
        let dp = new Array(stoneValue.length + 1).fill(-1)
        let ans = solve(0)
        return ans == 0 ? 'Tie' : (ans > 0) ? 'Alice' : 'Bob'

    }
}
