class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let freqCount = new Array(3).fill(0)
        for (let i = 0; i < nums.length; i++) {
            freqCount[nums[i]]++
        }

        let k = 0
        for (let i = 0; i < freqCount.length; i++) {
            for (let j = 0; j < freqCount[i]; j++) {
                nums[k] = i
                k++
            }
        }
    }
}
