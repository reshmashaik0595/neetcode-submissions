class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort((a, b) => a - b)
        function solve(idx, temp) {
            if (idx >= nums.length) {
                result.add(JSON.stringify([...temp]))
                return
            }
            temp.push(nums[idx])
            solve(idx + 1, temp)
            temp.pop()
            solve(idx + 1, temp)
        }

        let result = new Set
        let idx = 0
        let temp = []
        solve(idx, temp)
        return [...result].map((ele) => JSON.parse(ele))
    }
}
