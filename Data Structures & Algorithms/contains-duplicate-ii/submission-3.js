class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let hasSeen = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (hasSeen.has(nums[i])) {
                let idx = hasSeen.get(nums[i])
                if (i - idx <= k) {
                    return true
                }
            }
            hasSeen.set(nums[i], i)
        }
        return false
    }
}
