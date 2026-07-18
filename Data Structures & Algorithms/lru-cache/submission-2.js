class Node {
    constructor(key, val) {
        this.key = key
        this.value = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = new Node(-1, -1)
        this.tail = new Node(-1, -1)

        this.head.next = this.tail
        this.tail.prev = this.head

        this.capacity = capacity
        this.nodeMap = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodeMap.has(key)) {
            return - 1
        }

        let node = this.nodeMap.get(key)
        this.deleteNode(node)
        this.insertNode(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.nodeMap.has(key)) {
            let node = this.nodeMap.get(key)
            node.value = value
            this.nodeMap.set(key, node)
            this.deleteNode(node)
            this.insertNode(node)
        } else {
            let size = this.nodeMap.size
            if (size == this.capacity) {
                let lru = this.head.next
                this.deleteNode(lru)
                this.nodeMap.delete(lru.key)
                let node = new Node(key, value)
                this.nodeMap.set(key, node)
                this.insertNode(node)
            }
            else {
                let node = new Node(key, value)
                this.nodeMap.set(key, node)
                this.insertNode(node)
            }
        }
    }

    insertNode(node) {
        let prev = this.tail.prev
        prev.next = node
        node.next = this.tail
        this.tail.prev = node
        node.prev = prev
    }

    deleteNode(node) {
        let prev = node.prev
        let nxt = node.next

        prev.next = nxt
        nxt.prev = prev

        node.next = null
        node.prev = null
    }
}
