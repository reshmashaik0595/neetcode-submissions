class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function solve(steps) {
            if (steps == 0) return 1;
            if (steps < 0) return 0;
            if (dp[steps] !== -1) return dp[steps];
            return dp[steps] = solve(steps - 1) + solve(steps - 2);
        }
        let dp = new Array(n + 1).fill(-1);
        return solve(n);
    }
}
