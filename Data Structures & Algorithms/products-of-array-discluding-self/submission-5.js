class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pf = new Array(nums.length).fill(1)
        for (let i = 1; i < nums.length; i++) {
            pf[i] = pf[i - 1] * nums[i - 1]
        }
        let sf = new Array(nums.length).fill(1)
        for (let i = nums.length - 2; i >= 0; i--) {
            sf[i] = sf[i + 1] * nums[i + 1]
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = sf[i] * pf[i]
        }
        return nums
    }
}
