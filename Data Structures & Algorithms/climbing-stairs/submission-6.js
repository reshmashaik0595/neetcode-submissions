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

        // Recursion + Memoization [Top-Down Approach]
        // Time: O(N); Space: O(N)
        // function solve(n) {
        //     if (n == 0) return 1
        //     if (n < 0) return 0
        //     if (dp[n] !== -1) return dp[n]
        //     let one = solve(n - 1)
        //     let two = solve(n - 2)
        //     return dp[n] = one + two
        // }
        // let dp = new Array(n + 1).fill(-1)
        // return solve(n)

        // Iteration + Tabulation [Bottom-Up Approach]
        // Time: O(N); Space: O(N)
        // function solve(n) {
        //     for (let i = 2; i <= n; i++) {
        //         dp[i] = dp[i - 1] + dp[i - 2]
        //     }
        //     return dp[n]
        // }
        // let dp = new Array(n + 1).fill(-1)
        // dp[0] = 1
        // dp[1] = 1
        // return solve(n)

        // Space Optimization
        // Time: O(N); Space: O(1)
        function solve(n) {
            for (let i = 2; i<= n; i++) {
                let curr = first + second
                first = second
                second = curr
            }
            return second
        }
        let first = 1
        let second = 1
        return solve(n)

    }
}
