class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function solve(n) {
            if (n == 0) return 1;
            if (n < 0) return 0;
            if (dp[n] !== -1) return dp[n];
            return (dp[n] = solve(n - 1) + solve(n - 2));
        }
        let dp = new Array(n + 1).fill(-1);
        return solve(n);
    }
}
