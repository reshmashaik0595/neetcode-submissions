class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        function minCost(i, cost, dp) {
            if (i >= cost.length) return 0
            if (dp[i] !== -1) return dp[i]
            let nextStep = cost[i] + minCost(i + 1, cost, dp)
            let nextNextStep = cost[i] + minCost(i + 2, cost, dp)
            dp[i] = Math.min(nextStep, nextNextStep)
            return dp[i]
        }
        let dp = new Array(cost.length).fill(-1)
        return Math.min(minCost(0, cost, dp), minCost(1, cost, dp))
    }
}
