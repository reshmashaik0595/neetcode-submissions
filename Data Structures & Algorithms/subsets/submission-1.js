class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = []
        function solve(nums, i, curr) {
            if (i >= nums.length) {
                ans.push([...curr])
                return
            }
            curr.push(nums[i])
            solve(nums, i + 1, curr)
            curr.pop()
            solve(nums, i + 1, curr)
        }
        let curr = []
        solve(nums, 0, curr)
        return ans
    }
}
