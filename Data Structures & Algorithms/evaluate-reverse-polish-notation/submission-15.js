class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let i = 0; i < tokens.length; i++) {
            let op = tokens[i] 
            if (!isNaN(op)) {
                stack.push(Number(op))
            } else {
                let v2 = stack.pop()
                let v1 = stack.pop()
                stack.push(this.evalExp(op, v1, v2))
            }
        }
        return stack[0]
    }

    evalExp(op, v1, v2) {
        switch (op) {
            case '+':
                return v1 + v2
            case '-':
                return v1 - v2
            case '*':
                return v1 * v2
            case '/':
                return Math.trunc(v1 / v2)
        }
    }
}
