class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let min = Math.max(...weights);
        let max = weights.reduce((ele, acc = 0) => ele + acc)
        let ans;
        while (min <= max) {
            let mid = min + Math.floor((max - min) / 2)
            if (this.canBeShipped(weights, mid, days)) {
                ans = mid
                max = mid - 1
            } else {
                min = mid + 1
            }
        }
        return ans
    }

    canBeShipped(weights, mid, days) {
        let d = 1
        let w = weights[0]
        for (let i = 1; i < weights.length; i++) {
            if (w + weights[i] <= mid) {
                w = w + weights[i]
            } else {
                w = weights[i]
                d++
            }
        }
        return d <= days
    }
}
