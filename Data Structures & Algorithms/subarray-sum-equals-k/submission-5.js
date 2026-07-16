class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let pfSumFreq = new Map()
        pfSumFreq.set(0, 1)
        let pf = 0
        let ct = 0
        for (let i = 0; i < nums.length; i++) {
            pf = pf + nums[i]
            let lookFor = pf - k
            if (pfSumFreq.has(lookFor)) {
                ct = ct + pfSumFreq.get(lookFor)
            }
            pfSumFreq.set(pf, 1 + (pfSumFreq.get(pf) || 0))
        }
        return ct
    }
}

