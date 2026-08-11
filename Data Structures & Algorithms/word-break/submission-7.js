class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        function solve(idx) {
            if (idx >= s.length) return true
            if(dp[idx] !== -1) return dp[idx] 
            for (let len = 1; idx + len <= s.length; len++) {
                let str = s.substring(idx, idx + len)
                if (word.has(str) && solve(idx + len)) {
                    return dp[idx] = true
                }
            }
            return dp[idx] = false
        }
        let dp = new Array(s.length + 1).fill(-1)
        let word = new Set([...wordDict])
        return solve(0)
    }
}
