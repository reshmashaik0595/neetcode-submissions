class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        function isValid(str) {
            let stack = []
            for (let i = 0; i < str.length; i++) {
                if (str[i] == '(') {
                    stack.push('(')
                } else {
                    if (stack.length > 0 && stack[stack.length - 1] == '(')
                        stack.pop()
                    else return false
                }
            }
            return stack.length == 0
        }

        function solve(str) {
            if (str.length == 2 * n) {
                if (isValid(str)) {
                    result.push(str)
                }
                return
            }
            solve(str + '(')
            solve(str + ')')
        }
        let result = []
        solve('')
        return result
    }
}
