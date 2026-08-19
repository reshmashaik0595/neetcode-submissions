class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        function solve(curr, temp) {
            if (temp.length == k) {
                result.push([...temp])
                return
            }
            for (let i = curr; i <= n; i++) {
                temp.push(i)
                solve(i + 1, temp)
                temp.pop()
            }
        }

        let temp = []
        let result = []
        let curr = 1
        solve(curr, temp)
        return result
    }
}
