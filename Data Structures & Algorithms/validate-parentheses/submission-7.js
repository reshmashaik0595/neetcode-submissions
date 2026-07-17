class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let mapParentheses = {
            '}': '{',
            ')': '(',
            ']': '['
        }
        let stack = []
        for (let i = 0; i < s.length; i++) {
            let ch = s[i]
            if (ch == '{' || ch == '[' || ch == '(') {
                stack.push(ch)
            } else {
                if(stack.pop() !== mapParentheses[ch]){
                    return false
                }
            }
        }
        return stack.length == 0
    }
}
