class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        function isPal(i, j) {
            while (i <= j) {
                if (s[i] !== s[j]) {
                    return false
                }
                i++
                j--
            }
            return true
        }

        function solve(idx, curr) {
            if (idx == s.length) {
                ans.push([...curr])
                return
            }

            for (let i = idx; i < s.length; i++) {
                if (isPal(idx, i)) {
                    curr.push(s.substring(idx, i + 1))
                    solve(i + 1, curr)
                    curr.pop()
                }
            }
        }

        let ans = []
        solve(0, [])
        return ans

    }
}
