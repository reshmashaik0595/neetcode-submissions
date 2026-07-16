class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums = nums.sort((a, b) => a - b)
        let ans = []
        for (let k = 0; k < nums.length; k++) {
            if (k > 0 && nums[k] == nums[k - 1]) continue
            for (let l = k + 1; l < nums.length; l++) {
                if (l > k + 1 && nums[l] == nums[l - 1]) continue
                let i = l + 1
                let j = nums.length - 1
                while (i < j) {
                    let sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if (sum == target) {
                        ans.push([nums[k], nums[l], nums[i], nums[j]])
                        i++
                        j--
                        while (i < j && nums[i] == nums[i - 1]) i++
                        while (i < j && nums[j] == nums[j + 1]) j--
                    } else if (sum > target) {
                        j--
                    } else {
                        i++
                    }
                }
            }
        }
        return ans
    }
}
