class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        // Recursion + Memo [Top-Down Approach]
        // function solve(n) {
        //     if (n == 0) return 0
        //     if (n == 1) return 1
        //     if (dp[n] !== -1) return dp[n]
        //     let min = +Infinity
        //     for (let i = 1; i * i <= n; i++) {
        //         min = Math.min(min, 1 + solve(n - (i * i)))
        //     }
        //     return dp[n] = min
        // }
        // let dp = new Array(n + 1).fill(-1)
        // return solve(n)

        // Iterative + Tabulation [Bottom-Up Approach]
        function solve(n) {
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j * j <= i; j++) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - (j * j)])
                }
            }
            return dp[n]
        }
        let dp = new Array(n + 1).fill(Infinity)
        dp[0] = 0
        return solve(n)
    }
}
