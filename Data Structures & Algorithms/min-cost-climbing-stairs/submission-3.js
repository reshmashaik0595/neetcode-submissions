class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        function minCost(i) {
            if (i >= cost.length) return 0
            if (dp[i] !== -1) return dp[i]
            let nextStep = cost[i] + minCost(i + 1)
            let nextNextStep = cost[i] + minCost(i + 2)
            return dp[i] = Math.min(nextStep, nextNextStep)
        }
        let dp = new Array(cost.length).fill(-1)
        return Math.min(minCost(0), minCost(1))
    }
}
