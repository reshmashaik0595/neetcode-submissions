class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        function solve(nums, temp, isUsed) {
            if (temp.length >= nums.length) {
                result.push([...temp])
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (isUsed[i]) continue
                isUsed[i] = true
                temp.push(nums[i])
                solve(nums, temp, isUsed)
                isUsed[i] = false
                temp.pop()
            }
        }

        let result = []
        let temp = []
        let isUsed = new Array(nums.length).fill(false)
        solve(nums, temp, isUsed)
        return result
    }
}
