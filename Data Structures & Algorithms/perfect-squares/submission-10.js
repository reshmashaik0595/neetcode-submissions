class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        // function minSquare(n) {
        //     if (n == 1 || n == 0) return n
        //     if (dp[n] !== -1) return dp[n]
        //     let min = +Infinity
        //     for (let i = 1; i * i <= n; i++) {
        //         let curr = 1 + minSquare(n - (i * i))
        //         min = Math.min(curr, min)
        //     }
        //     return dp[n] = min
        // }
        // let dp = new Array(n + 1).fill(-1)
        // return minSquare(n)

        function minSquare(n) {
            for (let i = 2; i <= n; i++) {
                for (let j = 1; j * j <= i; j++) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - (j * j)])
                }
            }
            return dp[n]
        }
        let dp = new Array(n + 1).fill(Infinity)
        dp[0] = 0
        dp[1] = 1
        return minSquare(n)
    }
}
