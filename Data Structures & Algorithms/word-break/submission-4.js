class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set([...wordDict])
        function solve(idx) {
            if (idx >= s.length) return true
            if (dp[idx] !== -1) return dp[idx]
            for (let len = 1; idx + len <= s.length; len++) {
                let str = s.substring(idx, idx + len)
                if (wordSet.has(str)) {
                    if (solve(idx + len)) {
                        return dp[idx] = true
                    }
                }
            }
            return dp[idx] = false
        }
        let dp = new Array(s.length + 1).fill(-1)
        return solve(0)
    }
}
