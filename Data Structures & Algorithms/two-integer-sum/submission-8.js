class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hasSeen = new Map()
        for (let i = 0; i < nums.length; i++) {
            let lookFor = target - nums[i]
            if (hasSeen.has(lookFor)) {
                return [hasSeen.get(lookFor), i]
            }
            hasSeen.set(nums[i],i)
        }
    }
}
