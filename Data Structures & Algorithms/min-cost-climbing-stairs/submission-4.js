class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // Recursion
        // Time: O(2^N), Space: O(N)
        // function minCost(i) {
        //     if (i >= cost.length) return 0
        //     let nextStep = cost[i] + minCost(i + 1)
        //     let nextNextStep = cost[i] + minCost(i + 2)
        //     return Math.min(nextStep, nextNextStep)
        // }
        // return Math.min(minCost(0), minCost(1))
        // ---------------------------------------------------


        // Recursion + Memoization [Top-Down Approach]
        // Time: O(N), Space: O(N)
        // function minCost(i) {
        //     if (i >= cost.length) return 0
        //     if (dp[i] !== -1) return dp[i]
        //     let nextStep = cost[i] + minCost(i + 1)
        //     let nextNextStep = cost[i] + minCost(i + 2)
        //     return dp[i] = Math.min(nextStep, nextNextStep)
        // }
        // let dp = new Array(cost.length).fill(-1)
        // return Math.min(minCost(0), minCost(1))
        // ---------------------------------------------------


        // Iterative + Tabulation [Bottom-Up Approach]
        // Time: O(N), Space: O(N)
        function minCost() {
            let n = cost.length
            for (let i = 2; i < cost.length; i++) {
                dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
            }
            return Math.min(dp[n - 1], dp[n - 2])
        }
        let dp = new Array(cost.length).fill(-1)
        dp[0] = cost[0]
        dp[1] = cost[1]
        return minCost()
    }
}
