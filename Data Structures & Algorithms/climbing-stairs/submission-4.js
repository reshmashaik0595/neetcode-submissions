class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // Recursion 
        // Time: 2 ^ N; Space: O(N)
        // function solve(n) {
        //     if (n == 0) return 1
        //     if (n < 0) return 0
        //     let one = solve(n - 1)
        //     let two = solve(n - 2)
        //     return one + two
        // }
        // return solve(n)

        // Recursion + Memoizatio [Top-Down Approach]
        // Time: O(N); Space: O(N)
        function solve(n) {
            if (n == 0) return 1
            if (n < 0) return 0
            if (dp[n] !== -1) return dp[n]
            let one = solve(n - 1)
            let two = solve(n - 2)
            return dp[n] = one + two
        }
        let dp = new Array(n + 1).fill(-1)
        return solve(n)
    }
}
