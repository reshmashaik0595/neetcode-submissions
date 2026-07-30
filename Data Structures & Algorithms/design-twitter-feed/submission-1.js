class Twitter {
    constructor() {
        this.time = 1
        this.followMap = new Map()
        this.tweetMap = new Map()
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, [])
        }
        this.tweetMap.get(userId).push([tweetId, this.time++])
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let maxHeap = []
        let followeeIds = this.followMap.get(userId) || new Set()
        followeeIds.add(userId)
        for (let followeeId of followeeIds) {
            let tweets = this.tweetMap.get(followeeId) || []
            if (tweets.length == 0) continue
            let idx = tweets.length - 1
            let data = [
                tweets[idx][0],
                followeeId,
                tweets[idx][1],
                idx
            ]
            this.insertInMaxHeap(data, maxHeap)
        }

        let ans = []
        while (maxHeap.length > 0 && ans.length < 10) {
            let lastTweet = this.extractMax(maxHeap)
            ans.push(lastTweet[0])

            let tweets = this.tweetMap.get(lastTweet[1]) || []
            if (tweets.length == 0) continue

            let idx = lastTweet[3] - 1
            if (idx < 0) continue

            let data = [
                tweets[idx][0],
                lastTweet[1],
                tweets[idx][1],
                idx
            ]
            this.insertInMaxHeap(data, maxHeap)

        }
        return ans
    }

    extractMax(heap) {
        if (heap.length == 1) {
            return heap.pop();
        }

        let max = heap[0]
        heap[0] = heap.pop()
        this.heapify(0, heap)
        return max
    }

    heapify(i, heap) {
        while ((2 * i) + 1 < heap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(heap[i][2], heap[left][2])
            if (right < heap.length) {
                max = Math.max(max, heap[right][2])
            }

            if (max == heap[i][2]) break;
            if (max == heap[left][2]) {
                let tmp = heap[left]
                heap[left] = heap[i]
                heap[i] = tmp
                i = left
            } else {
                let tmp = heap[right]
                heap[right] = heap[i]
                heap[i] = tmp
                i = right
            }
        }
    }

    insertInMaxHeap(data, heap) { //heapify-up
        heap.push(data)
        let i = heap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (heap[pi][2] > heap[i][2]) break
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }
    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set())
        }
        this.followMap.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId)
        }
    }
}
