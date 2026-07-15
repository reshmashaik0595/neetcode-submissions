class Node {
    constructor(val, key) {
        this.val = val
        this.key = key
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()

        this.head = new Node(-1)
        this.tail = new Node(-1)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key))
            return -1

        let node = this.map.get(key)
        this.deleteIthNode(node)
        this.insertAtTail(node)
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            node.val = value
            this.deleteIthNode(node)
            this.insertAtTail(node)
        } else {
            let size = this.map.size
            if (size == this.capacity) {
                let lru = this.head.next
                this.deleteIthNode(lru)
                this.map.delete(lru.key)
                let node = new Node(value,key)
                this.map.set(key, node)
                this.insertAtTail(node)

            } else {
                let node = new Node(value,key)
                this.map.set(key, node)
                this.insertAtTail(node)
            }
        }
    }

    deleteIthNode(node) {
        let p2 = node
        let p1 = p2.prev
        let p3 = p2.next
        p1.next = p3
        p3.prev = p1
    }

    insertAtTail(node) {
        let p3 = this.tail
        let p2 = node
        let p1 = p3.prev

        p1.next = p2
        p2.next = p3

        p3.prev = p2
        p2.prev = p1
    }
}
