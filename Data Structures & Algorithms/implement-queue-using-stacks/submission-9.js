class MyQueue {
    constructor() {
        this.iStack = []
        this.oStack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.iStack.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.oStack.length > 0) {
            return this.oStack.pop()
        }

        while (this.iStack.length > 0) {
            this.oStack.push(this.iStack.pop())
        }
        return this.oStack.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.oStack.length > 0) {
            return this.oStack[this.oStack.length - 1]
        }

        while (this.iStack.length > 0) {
            this.oStack.push(this.iStack.pop())
        }
        return this.oStack[this.oStack.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.iStack.length == 0 && this.oStack.length == 0
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
