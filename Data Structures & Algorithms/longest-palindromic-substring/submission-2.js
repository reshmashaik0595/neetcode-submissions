class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        function isPal(s, i, j) {
            if (i >= j) return true
            if (dp[i][j] !== -1) return dp[i][j]
            if (s[i] !== s[j]) return false
            return dp[i][j] = isPal(s, i + 1, j - 1)
        }

        let max = 1
        let st = 0
        let dp = new Array(1001)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(1001).fill(-1)
        }
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                if (isPal(s, i, j) == true) {
                    let curr = j - i + 1
                    if (curr > max) {
                        max = curr
                        st = i
                    }
                }
            }
        }
        return s.substring(st, st + max)
    }
}
