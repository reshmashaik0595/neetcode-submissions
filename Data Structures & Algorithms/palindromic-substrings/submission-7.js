class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        function isPal(i, j) {
            if (i >= j) return true
            if (dp[i][j] !== -1) return dp[i][j]
            if (s[i] !== s[j]) return false
            return dp[i][j] = isPal(i + 1, j - 1)
        }
        let dp = new Array(s.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(s.length + 1).fill(-1)
        }
        let count = 0
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (isPal(i, j)) count++
            }
        }
        return count
    }
}
