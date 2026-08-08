class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        function solve(i, s) {
            if (i >= s.length) return 1
            if (s[i] == '0') return 0
            if (dp[i] !== -1) return dp[i]
            let result = solve(i + 1, s)
            if ((i + 1) < s.length && (s[i] == '1' || (s[i] == '2' && s[i + 1] <= '6')))
                result = result + solve(i + 2, s)
            return dp[i] = result
        }
        let dp = new Array(101).fill(-1)
        return solve(0, s)
    }
}
