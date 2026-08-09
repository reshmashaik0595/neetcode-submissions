class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        function solve(n) {
            if (n == 1) return 1
            if (dp[n] !== -1) return dp[n]
            let max = -Infinity
            for (let i = 1; i < n; i++) {
                let curr = i * Math.max(n - i, solve(n - i))
                max = Math.max(curr, max)
            }
            return dp[n] = max
        }
        let dp = new Array(n + 1).fill(-1)
        return solve(n)
    }
}
