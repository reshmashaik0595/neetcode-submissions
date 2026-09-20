class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        function solve(nums, curr, idx) {
            if (idx >= nums.length) {
                ans.push([...curr])
                return
            }
            curr.push(nums[idx])
            solve(nums, curr, idx + 1)
            curr.pop()
            solve(nums, curr, idx + 1)
        }
        let ans = []
        let curr = []
        let idx = 0
        solve(nums, curr, idx)
        return ans
    }
}
