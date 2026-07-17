class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1
        let max = Math.max(...piles)
        let ans;
        while (min <= max) {
            let mid = min + Math.floor((max - min) / 2)
            if (this.canFinishEating(mid, h, piles)) {
                ans = mid
                max = mid - 1
            } else {
                min = mid + 1
            }
        }
        return ans
    }

    canFinishEating(b, h, piles) {
        let hr = 0
        for (let i = 0; i < piles.length; i++) {
            hr = hr + Math.floor(piles[i] / b)
            if (piles[i] % b > 0) {
                hr++
            }
        }
        console.log(hr, b)
        return hr <= h
    }
}

// 10 3
