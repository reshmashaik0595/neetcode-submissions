class FreqStack {
    constructor() {
        this.freqCMap = new Map()
        this.freqCStack = new Map()
        this.max = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let count = 1 + (this.freqCMap.get(val) || 0)
        this.freqCMap.set(val, count)
        if (count > this.max) {
            this.max = count
        }

        if (!this.freqCStack.has(count)) {
            this.freqCStack.set(count, [])
        }
        this.freqCStack.get(count).push(val)
    }

    /**
     * @return {number}
     */
    pop() {
        let val = this.freqCStack.get(this.max).pop()
        let count = this.freqCMap.get(val) - 1
        this.freqCMap.set(val, count)
        if (this.freqCStack.get(this.max).length == 0) {
            this.freqCStack.delete(this.max)
            this.max--
        }
        return val
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
