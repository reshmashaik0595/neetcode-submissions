class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        function solve(idx) {
            if (idx >= nums.length - 1) {
                return 0
            }
            if (dp[idx] !== -1) return dp[idx]
            let minJumps = +Infinity
            for (let i = 1; i <= nums[idx]; i++) {
                minJumps = Math.min(minJumps, 1 + solve(idx + i))
            }
            return dp[idx] = minJumps
        }
        let dp = new Array(nums.length).fill(-1)

        return solve(0)
    }
}
