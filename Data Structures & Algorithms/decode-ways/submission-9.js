class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        function solve(idx) {
            if (idx >= s.length) return 1
            if (s[idx] == '0') return 0
            if (dp[idx] !== -1) return dp[idx]
            let take_one = solve(idx + 1)
            let take_two = 0
            if (idx + 1 < s.length)
                if (s[idx] == '1' || s[idx] == '2' && s[idx + 1] <= '6') {
                    take_two = solve(idx + 2)
                }
            return dp[idx] = take_one + take_two
        }
        let dp = new Array(s.length + 1).fill(-1)
        return solve(0)
    }
}
