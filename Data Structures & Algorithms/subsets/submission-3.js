class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        function generateSubsets(nums, temp, idx) {
            if (idx >= nums.length) {
                result.push([...temp])
                return;
            }

            temp.push(nums[idx])
            generateSubsets(nums, temp, idx + 1)
            temp.pop()
            generateSubsets(nums, temp, idx + 1)
        }

        let result = []
        let temp = []
        let idx = 0
        generateSubsets(nums, temp, idx)
        return result
    }
}
