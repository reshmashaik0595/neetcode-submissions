class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.capacity = k
        this.size = 0
        this.head = new Node(-1)
        this.tail = new Node(-1)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.size == this.capacity) {
            return false
        }
        let p2 = new Node(value)
        let p1 = this.tail.prev
        let p3 = this.tail
        p1.next = p2
        p2.next = p3
        p3.prev = p2
        p2.prev = p1
        this.size++
        return true
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) {
            return false
        }
        let p1 = this.head
        let p2 = p1.next
        let p3 = p2.next

        p1.next = p3
        p3.prev = p1
        this.size--
        return true
    }

    /**
     * @return {number}
     */
    Front() {
        return this.head.next.val
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.tail.prev.val
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size == 0
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size == this.capacity
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
