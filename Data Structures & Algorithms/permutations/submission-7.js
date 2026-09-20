class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        function solve(nums, curr) {
            if (curr.length == nums.length) {
                ans.push([...curr])
                return
            }
            for (let i = 0; i < nums.length; i++) {
                if(isUsed[i]) continue
                curr.push(nums[i])
                isUsed[i]=true
                solve(nums, curr)
                isUsed[i]=false
                curr.pop()
            }
        }

        let ans = []
        let isUsed = new Array(nums.length).fill(false)
        solve(nums, [])
        return ans
    }
}
