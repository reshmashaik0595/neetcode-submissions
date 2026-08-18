class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums = nums.sort((a, b) => a - b)
        function solve(idx, curr) {
            if (curr.length === nums.length) {
                result.push([...curr])
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (i > 0 && nums[i] == nums[i - 1] && !isUsed[i - 1]) continue
                if (isUsed[i]) continue
                curr.push(nums[i])
                isUsed[i] = true
                solve(idx + 1, curr)
                isUsed[i] = false
                curr.pop()
            }
        }
        let result = []
        let isUsed = new Array(nums.length).fill(false)
        solve(0, [])
        return result
    }
}
