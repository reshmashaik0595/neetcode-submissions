class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordLookup = new Set([...wordDict])
        function solve(i) {
            if (i >= s.length) return true
            if (dp[i] !== -1) return dp[i]
            for (let len = 1; i + len <= s.length; len++) {
                let str = s.substring(i, i + len)
                if (wordLookup.has(str) && solve(i + len)) {
                    return dp[i] = true
                }
            }
            return dp[i] = false
        }
        let dp = new Array(s.length + 1).fill(-1)
        return solve(0)
    }
}
