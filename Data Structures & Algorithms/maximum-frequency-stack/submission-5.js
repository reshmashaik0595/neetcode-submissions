class FreqStack {
    constructor() {
        this.freqMap = new Map()
        this.stack = new Map()
        this.max = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let cnt = 1 + (this.freqMap.get(val) || 0)
        this.freqMap.set(val, cnt)
        if (cnt > this.max) {
            this.max = cnt
            this.stack.set(cnt, [])
        }
        this.stack.get(cnt).push(val)
    }

    /**
     * @return {number}
     */
    pop() {
        let val = this.stack.get(this.max).pop()
        this.freqMap.set(val, this.freqMap.get(val) - 1)
        if (this.stack.get(this.max).length == 0) {
            this.stack.delete(this.max)
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
