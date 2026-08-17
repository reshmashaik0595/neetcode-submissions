class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)
        function solve(nums, idx, curr) {
            if (idx >= nums.length) {
                ans.add(JSON.stringify([...curr]))
                return
            }
            curr.push(nums[idx])
            solve(nums, idx + 1, curr)
            curr.pop()
            solve(nums, idx + 1, curr)
        }
        let ans = new Set()
        solve(nums, 0, [])
        return [...ans].map(ele => JSON.parse(ele))
    }
}
