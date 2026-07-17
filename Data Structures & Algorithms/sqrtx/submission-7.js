class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0
        let h = x
        let ans;
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (mid * mid == x) {
                return mid
            }

            if (mid * mid < x) {
                ans = mid
                l = mid + 1
            } else {
                ans = mid - 1
                h = mid - 1
            }
        }

        return ans
    }
}
