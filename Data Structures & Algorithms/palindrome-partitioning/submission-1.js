class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        function isValid(str) {
            let i = 0
            let j = str.length - 1
            while (i <= j) {
                if (str[i] !== str[j]) {
                    return false
                }
                i++
                j--
            }
            return true
        }

        function solve(idx, temp) {
            if (idx >= s.length) {
                result.push([...temp])
                return
            }

            for (let i = idx; i < s.length; i++) {
                let str = s.substring(idx, i + 1)
                if (isValid(str)) {
                    temp.push(str)
                    solve(i + 1, temp)
                    temp.pop()
                }
            }
        }

        let result = []
        solve(0, [])
        return result
    }
}
