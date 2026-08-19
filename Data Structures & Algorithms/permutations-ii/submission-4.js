class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums = nums.sort((a, b) => a - b)
        function solve(temp) {
            if (temp.length == nums.length) {
                result.push([...temp])
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if (i > 0 && nums[i] == nums[i - 1] && !isUsed[i - 1]) continue
                if (isUsed[i]) continue
                isUsed[i] = true
                temp.push(nums[i])
                solve(temp)
                isUsed[i] = false
                temp.pop()
            }
        }

        let result = []
        let isUsed = new Array(nums.length).fill(false)
        let temp = []
        solve(temp)
        return result
    }
}
