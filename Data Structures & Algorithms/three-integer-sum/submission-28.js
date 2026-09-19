class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)
        let ans = []
        for (let k = 0; k < nums.length; k++) {
            if (k > 0 && nums[k] == nums[k - 1]) {
                continue
            }
            let i = k + 1
            let j = nums.length - 1
            while (i < j) {

                let target = -1 * nums[k]
                let curr = nums[i] + nums[j]
                if (target == curr) {
                    ans.push([nums[i], nums[j], nums[k]])
                    i++
                    j--
                    while (i < j && nums[i] == nums[i - 1]) {
                        i++
                    }

                    while (i < j && nums[j] == nums[j + 1]) {
                        j--
                    }
                } else if (curr < target) {
                    i++
                } else {
                    j--
                }
            }
        }
        return ans
    }
}
