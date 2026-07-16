class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)
        let ans = []
        for (let k = 0; k < nums.length; k++) {
            if (k > 0 && nums[k] == nums[k - 1]) continue
            let i = k + 1
            let j = nums.length - 1
            while (i < j) {
                let sum = nums[i] + nums[j]
                let tg = -1 * nums[k]
                if (sum == tg) {
                    ans.push([nums[k], nums[i], nums[j]])
                    i++
                    j--
                    while (i < j && nums[i] == nums[i - 1]) i++
                    while (i < j && nums[j] == nums[j + 1]) j--
                } else if (sum > tg) {
                    j--
                } else {
                    i++
                }
            }
        }
        return ans
    }


}
