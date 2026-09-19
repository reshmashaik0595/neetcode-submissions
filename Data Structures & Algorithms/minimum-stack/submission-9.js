class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.minStack.length == 0) {
            this.minStack.push(val)
            return
        }

        if (val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
            return
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length > 0) {
            let popVal = this.stack.pop()
            if (this.minStack[this.minStack.length - 1] == popVal) {
                this.minStack.pop()
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
