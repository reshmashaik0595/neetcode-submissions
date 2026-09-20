class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        function isValidParenthesis(str) {
            let stack = []
            for (let i = 0; i < str.length; i++) {
                if (str[i] == ')') {
                    if(stack.length == 0){
                        return false
                    }
                    if (stack.pop() !== '(') {
                        return false
                    }
                } else {
                    stack.push('(')
                }
            }
            return stack.length == 0
        }

        function solve(n, curr) {
            if (curr.length == 2 * n) {
                if (isValidParenthesis(curr)) {
                    ans.push(curr)
                }
                return
            }

            solve(n, curr + '(')
            solve(n, curr + ')')
        }

        let ans = []
        let curr = ''
        solve(n, curr)
        return ans
    }
}
