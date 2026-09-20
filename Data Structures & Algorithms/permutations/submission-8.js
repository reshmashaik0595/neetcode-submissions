class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        function solve(nums, curr) {
            if (nums.length == curr.length) {
                res.push([...curr])
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (isUsed[i] == true) {
                    continue
                }
                isUsed[i] = true
                curr.push(nums[i])
                solve(nums, curr)
                isUsed[i] = false
                curr.pop()
            }
        }
        let isUsed = new Array(nums.length).fill(false)
        let curr = []
        let res = []
        solve(nums, curr)
        return res
    }
}
