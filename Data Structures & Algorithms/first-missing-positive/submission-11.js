class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let is1Found = false
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                is1Found = true
                break
            }
        }
        if (!is1Found) return 1

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= 0 || nums[i] > nums.length) {
                nums[i] = 1
            }
        }
        console.log(nums)
        for (let i = 0; i < nums.length; i++) {
            let ele = Math.abs(nums[i])
            if (nums[ele - 1] < 0) continue
            nums[ele - 1] = -1 * nums[ele - 1]
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) return i + 1
        }
        return nums.length + 1
    }
}
