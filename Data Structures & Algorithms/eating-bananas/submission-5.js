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
            if (this.canEatAllBananas(piles, mid, h)) {
                ans = mid
                max = mid - 1
            } else {
                min = mid + 1
            }
        }
        return ans
    }

    canEatAllBananas(piles, mid, h) {
        let hoursTaken = 0
        for (let i = 0; i < piles.length; i++) {
            hoursTaken = hoursTaken + Math.floor(piles[i] / mid)
            if ((piles[i] % mid) > 0) {
                hoursTaken = hoursTaken + 1
            }
        }
        return hoursTaken <= h
    }
}

// 10 / 3

// 3) 10(3
//     9
// --------
// 1
// --------