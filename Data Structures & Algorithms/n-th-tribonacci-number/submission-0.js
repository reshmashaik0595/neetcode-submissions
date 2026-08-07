class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        function solve(n) {
            for (let i = 3; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
            }
            return dp[n]
        }
        let dp = new Array(n + 1).fill(-1)
        dp[0] = 0
        dp[1] = 1
        dp[2] = 1
        return solve(n)
    }
}
