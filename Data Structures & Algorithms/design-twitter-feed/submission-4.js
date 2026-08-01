class Twitter {
    constructor() {
        this.followMap = new Map();
        this.tweetMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }
        this.tweetMap.get(userId).push([tweetId, this.time++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let followers = this.followMap.get(userId) || new Set();
        followers.add(userId);
        let maxHeap = [];
        for (let follower of followers) {
            let tweets = this.tweetMap.get(follower) || [];
            if (tweets.length == 0) continue;
            let idx = tweets.length - 1;
            let data = [tweets[idx][0], tweets[idx][1], follower, idx];
            this.insertInMaxHeap(maxHeap, data);
        }

        let ans = [];
        while (ans.length < 10) {
            if (maxHeap.length == 0) break;
            let max = this.extractMax(maxHeap);
            ans.push(max[0]);
            let tweets = this.tweetMap.get(max[2]);
            let idx = max[3] - 1;
            if (idx < 0) continue;
            let data = [tweets[idx][0], tweets[idx][1], max[2], idx];
            this.insertInMaxHeap(maxHeap, data);
        }
        return ans;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }

    insertInMaxHeap(maxHeap, data) {
        maxHeap.push(data);
        let i = maxHeap.length - 1;
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2);
            if (maxHeap[pi][1] > maxHeap[i][1]) break;
            let tmp = maxHeap[pi];
            maxHeap[pi] = maxHeap[i];
            maxHeap[i] = tmp;
            i = pi;
        }
    }

    extractMax(maxHeap) {
        if (maxHeap.length === 1) return maxHeap.pop();
        let max = maxHeap[0];
        maxHeap[0] = maxHeap.pop();
        this.heapifyDown(maxHeap, 0);
        return max;
    }

    heapifyDown(maxHeap, i) {
        while (2 * i + 1 < maxHeap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let max = Math.max(maxHeap[i][1], maxHeap[left][1]);
            if (right < maxHeap.length) {
                max = Math.max(max, maxHeap[right][1]);
            }
            if (max == maxHeap[i][1]) break;
            if (max == maxHeap[left][1]) {
                let tmp = maxHeap[left];
                maxHeap[left] = maxHeap[i];
                maxHeap[i] = tmp;
                i = left;
            } else {
                let tmp = maxHeap[right];
                maxHeap[right] = maxHeap[i];
                maxHeap[i] = tmp;
                i = right;
            }
        }
    }
}
