class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let pfSum = new Map()
        pfSum.set(0, 1)
        let runningSum = 0
        let ans = 0
        for (let i = 0; i < nums.length; i++) {
            runningSum = runningSum + nums[i]
            let lookFor = runningSum - k
            if (pfSum.has(lookFor)) {
                ans = ans + pfSum.get(lookFor)
            }
            pfSum.set(runningSum, 1 + (pfSum.get(runningSum) || 0))
        }
        return ans
    }
}
