class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        function solve(idx, amount) {
            if (amount == 0) return 1
            if (idx >= coins.length) return 0
            if (dp[idx][amount] !== -1) return dp[idx][amount]
            if (coins[idx] > amount) {
                return dp[idx][amount] = solve(idx + 1, amount)
            }
            let take = solve(idx, amount - coins[idx])
            let skip = solve(idx + 1, amount)
            return dp[idx][amount] = take + skip
        }
        let dp = new Array(coins.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(amount + 1).fill(-1)
        }
        return solve(0, amount)
    }
}
