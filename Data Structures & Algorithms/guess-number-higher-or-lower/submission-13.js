/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1
        let h = n
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            let val = guess(mid)
            if (val == 0) {
                return mid
            } else if (val == -1) {
                h = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
}
