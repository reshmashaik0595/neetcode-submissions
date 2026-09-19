class MyQueue {
    constructor() {
        this.ipStack = []
        this.opStack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.ipStack.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.opStack.length > 0) {
            return this.opStack.pop()
        }
        while (this.ipStack.length > 0) {
            this.opStack.push(this.ipStack.pop())
        }
        return this.opStack.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.opStack.length > 0) {
            return this.opStack[this.opStack.length - 1]
        }
        while (this.ipStack.length > 0) {
            this.opStack.push(this.ipStack.pop())
        }
        return this.opStack[this.opStack.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.ipStack.length == 0 && this.opStack.length == 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
