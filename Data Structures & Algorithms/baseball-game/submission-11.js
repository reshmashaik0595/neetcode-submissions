class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] == '+') {
                stack.push(stack[stack.length - 2] + stack[stack.length - 1])
            } else if (operations[i] == 'C') {
                stack.pop()
            } else if (operations[i] == 'D') {
                stack.push(2 * stack[stack.length - 1])
            } else {
                stack.push(Number(operations[i]))
            }
        }
        console.log(stack)
        return stack.length == 0 ? 0 : stack.reduce((ele, acc) => ele + acc)
    }
}
