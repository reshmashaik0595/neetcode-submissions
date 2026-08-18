class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        function solve(i, curr) {
            if (i == nums.length) {
                ans.push([...curr])
                return
            }
            // for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            solve(i + 1, curr)
            curr.pop()
            solve(i + 1, curr)
            // }
        }
        let ans = []
        solve(0, [])
        return ans
    }
}
