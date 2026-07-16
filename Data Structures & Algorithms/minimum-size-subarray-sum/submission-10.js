class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let pf = 0
        let l = 0
        let r = 0
        let min = +Infinity
        while (r < nums.length) {
            pf = pf + nums[r]
            while (pf >= target) {
                // min = Math.min(min, r - l + 1)
                pf = pf - nums[l]
                l++
            }
            // console.log(min, l, r, r - (l - 1) + 1)
            if (l > 0) {
                min = Math.min(min, r - (l - 1) + 1);
            }
            r++
        }
        return min == Infinity ? 0 : min
    }
}
