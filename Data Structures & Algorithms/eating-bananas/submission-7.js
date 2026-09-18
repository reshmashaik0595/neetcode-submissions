class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles)
        let ans;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2)
            if (this.canEatBananas(piles, h, mid)) {
                ans = mid
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        return ans
    }

    canEatBananas(piles, actualHours, candidateBananas) {
        let hoursUsed = 0
        for (let i = 0; i < piles.length; i++) {
            hoursUsed = hoursUsed + Math.floor(piles[i] / candidateBananas)
            if (piles[i] % candidateBananas > 0) {
                hoursUsed++
            }
        }
        return hoursUsed <= actualHours
    }
}
