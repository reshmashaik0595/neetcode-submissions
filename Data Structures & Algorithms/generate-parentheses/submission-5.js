class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        function solve(n, curr, op, cl) {
            if (curr.length == 2 * n) {
                ans.push(curr)
                return
            }
            if (op < n)
                solve(n, curr + '(', op + 1, cl)
            if (cl < op)
                solve(n, curr + ')', op, cl + 1)
        }

        let ans = []
        solve(n, '', 0, 0)
        return ans
    }
}
