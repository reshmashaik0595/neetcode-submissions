class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function totalWays(n) {
            if (n < 0) return 0
            if (n == 0) return 1
            if (dp[n] !== -1) return dp[n]
            let step_1 = totalWays(n - 1)
            let step_2 = totalWays(n - 2)
            return dp[n] = step_1 + step_2
        }
        let dp = new Array(n + 1).fill(-1)
        return totalWays(n)
    }
}
