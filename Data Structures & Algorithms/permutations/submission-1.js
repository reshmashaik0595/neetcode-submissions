class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        function solve(idx, curr) {
            if (curr.length == nums.length) {
                result.push([...curr])
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (isUsed[i]) continue
                isUsed[i] = true
                curr.push(nums[i])
                solve(idx + 1, curr)
                isUsed[i] = false
                curr.pop()
            }
        }
        let isUsed = new Array(nums.length).fill(false)
        let result = []
        solve(0, [])
        return result
    }
}
