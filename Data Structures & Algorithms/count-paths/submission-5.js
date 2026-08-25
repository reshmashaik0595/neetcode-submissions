class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        function solve(row, col) {
            if (row >= m || col >= n) return 0
            if (row == m - 1 && col == n - 1) return 1

            if (dp[row][col] !== -1) return dp[row][col]
            return dp[row][col] = solve(row + 1, col) + solve(row, col + 1)
        }
        let dp = new Array(m)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(n + 1).fill(-1)
        }
        return solve(0, 0)
    }
}
