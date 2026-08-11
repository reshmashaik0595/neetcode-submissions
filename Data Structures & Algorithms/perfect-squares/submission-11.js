class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        function solve(n) {
            for (let i = 2; i <= n; i++) {
                for (let j = 1; j * j <= i; j++) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - j * j])
                }
            }
            return dp[n]
        }
        let dp = new Array(n + 1).fill(n + 1)
        dp[0] = 0
        dp[1] = 1
        return solve(n)
    }
}
