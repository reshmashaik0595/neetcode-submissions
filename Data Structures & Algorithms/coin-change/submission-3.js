class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        function minCoins(coins, amount, i) {
            if (amount == 0) return 0
            if (i >= coins.length) return Infinity
            if (dp[i][amount] !== -1) return dp[i][amount]
            if (amount < coins[i]) {
                return dp[i][amount] = minCoins(coins, amount, i + 1)
            }
            let take = 1 + minCoins(coins, amount - coins[i], i)
            let skip = minCoins(coins, amount, i + 1)
            return dp[i][amount] = Math.min(take, skip)
        }
        let min = +Infinity
        let dp = new Array(101)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(10001).fill(-1)
        }
        min = minCoins(coins, amount, 0)
        return min == +Infinity ? -1 : min
    }
}
