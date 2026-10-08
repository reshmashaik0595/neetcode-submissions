class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, hours) {
        function solve(piles, hours) {
            let low = 1;
            let high = Math.max(...piles);
            let result;
            while (low <= high) {
                let candidate = low + Math.floor((high - low) / 2);
                if (canEatAllBananas(piles, hours, candidate)) {
                    result = candidate;
                    high = candidate - 1;
                } else {
                    low = candidate + 1;
                }
            }
            return result;
        }

        function canEatAllBananas(piles, hours, candidate) {
            let hoursConsumed = 0;
            for (let i = 0; i < piles.length; i++) {
                hoursConsumed = hoursConsumed + Math.floor(piles[i] / candidate);
                if (piles[i] % candidate > 0) {
                    hoursConsumed++;
                }
            }
            return hoursConsumed <= hours;
        }

        return solve(piles, hours);
    }
}
