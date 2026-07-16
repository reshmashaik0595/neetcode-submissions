class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hasSeen = new Set(nums)
        let max = 0
        for (let i = 0; i < nums.length; i++) {
            let ele = nums[i]
            let cnt = 0
            while (hasSeen.has(ele)) {
                cnt++
                ele++
            }
            max = Math.max(cnt, max)
        }
        return max
    }
}
