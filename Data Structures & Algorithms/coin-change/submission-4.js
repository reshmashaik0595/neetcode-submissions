class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        function solve(idx, amount) {
            if (amount == 0) return 0
            if (idx >= coins.length) return +Infinity
            if (dp[idx][amount] !== -1) return dp[idx][amount]
            if (coins[idx] > amount) {
                return dp[idx][amount] = solve(idx + 1, amount)
            }
            let take = 1 + solve(idx, amount - coins[idx])
            let skip = solve(idx + 1, amount)
            return dp[idx][amount] = Math.min(take, skip)
        }

        let dp = new Array(coins.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(amount + 1).fill(-1)
        }
        let ans = solve(0, amount)
        return ans == Infinity ? -1 : ans
    }
}
