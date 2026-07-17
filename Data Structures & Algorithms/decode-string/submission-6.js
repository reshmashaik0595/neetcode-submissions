class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] == ']') {
                let curr = ''
                while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                    curr = stack.pop() + curr
                }
                stack.pop()
                let num = ''
                while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                    num = stack.pop() + num
                }
                num = Number(num)
                let str = ''
                for (let i = 0; i < num; i++) {
                    str = curr + str
                }
                console.log(str)
                stack.push(str)
            } else {
                stack.push(s[i])
            }
        }
        console.log(stack)
        return stack.join('')
    }
}