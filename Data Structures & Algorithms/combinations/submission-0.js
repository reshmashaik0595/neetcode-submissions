class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        function solve(i, curr) {
            if (curr.length == k) {
                result.push([...curr])
                return
            }
            for (let j = i; j <= n; j++) {
                curr.push(j)
                solve(j + 1, curr)
                curr.pop()
            }
        }

        let result = []
        solve(1, [])
        return result
    }
}
