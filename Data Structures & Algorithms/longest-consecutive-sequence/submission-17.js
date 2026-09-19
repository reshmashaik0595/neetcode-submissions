class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hasSeen = new Set(nums)
        let max = 0
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if (hasSeen.has(num - 1)) {
                continue
            }
            let curr = 1
            while (hasSeen.has(num + 1)) {
                curr++
                num++
            }
            max = Math.max(max, curr)
        }
        return max
    }
}
