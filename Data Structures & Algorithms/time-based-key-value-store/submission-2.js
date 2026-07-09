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
        let arr = this.keyStore.get(key) || []
        let l = 0
        let r = arr.length - 1
        let ans = '';
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            let data = arr[mid]
            if (data[1] == timestamp) {
                return data[0]
            }

            if (data[1] < timestamp) {
                ans = data[0]
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return ans
    }
}
