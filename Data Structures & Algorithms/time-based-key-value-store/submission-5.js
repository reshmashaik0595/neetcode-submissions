class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return ""
        }

        let arr = this.keyStore.get(key)
        let l = 0
        let h = arr.length - 1
        let ans ="";
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (arr[mid][1] == timestamp) {
                return arr[mid][0]
            }
            if (arr[mid][1] < timestamp) {
                ans = arr[mid][0]
                l = mid + 1
            } else {
                h = mid - 1
            }
        }
        return ans
    }
}
