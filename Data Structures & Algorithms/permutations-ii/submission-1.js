class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums = nums.sort((a, b) => a - b)
        function solve(idx, curr) {
            if (curr.length === nums.length) {
                result.add(JSON.stringify([...curr]))
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (isUsed[i]) continue
                curr.push(nums[i])
                isUsed[i] = true
                solve(idx + 1, curr)
                isUsed[i] = false
                curr.pop()
            }
        }
        let result = new Set()
        let isUsed = new Array(nums.length).fill(false)
        solve(0, [])
        return [...result].map(ele => JSON.parse(ele))
    }
}
