class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let low = Math.max(...weights)
        let high = weights.reduce((acc, ele) => acc + ele, 0)
        let ans;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2)
            if (this.canBeShipped(weights, days, mid)) {
                ans = mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        return ans
    }

    canBeShipped(weights, days, capacity) {
        let daysTaken = 1
        let weightsSoFar = 0
        for (let i = 0; i < weights.length; i++) {
            if (weightsSoFar + weights[i] <= capacity) {
                weightsSoFar = weightsSoFar + weights[i]
            } else {
                weightsSoFar = weights[i]
                daysTaken++
            }
        }
        return daysTaken <= days
    }
}
