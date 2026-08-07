class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // Recursion
        // Time: 2 ^ N; Space: O(1)
        // function solve(cost, i) {
        //     if (i < 0) return 0
        //     if (i == 0 || i == 1) return cost[i]
        //     return cost[i] + Math.min(solve(cost, i - 1), solve(cost, i - 2))
        // }
        // return Math.min(solve(cost, cost.length - 1), solve(cost, cost.length - 2));

        // Recursion + Memoization [Top-Down Approach]
        // Time: O(N); Space: O(1)
        function solve(cost, i) {
            if (i < 0) return 0
            if (i == 0 || i == 1) return cost[i]
            if (dp[i] !== -1) return dp[i]
            return dp[i] = cost[i] + Math.min(solve(cost, i - 1), solve(cost, i - 2))
        }
        let dp = new Array(cost.length + 1).fill(-1)
        return Math.min(solve(cost, cost.length - 1), solve(cost, cost.length - 2));

    }
}
