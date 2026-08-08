class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        function solve(amount, coins, i) {
            if (amount == 0)
                return 1
            if (i >= coins.length)
                return 0
            if (dp[i][amount] != -1) return dp[i][amount]
            if (amount < coins[i])
                return dp[i][amount] = solve(amount, coins, i + 1)
            let take = solve(amount - coins[i], coins, i)
            let skip = solve(amount, coins, i + 1)
            return dp[i][amount] = take + skip
        }
        let dp = new Array(101)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(5001).fill(-1)
        }
        return solve(amount, coins, 0)
    }
}
