class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deque = []
        let ans = []
        for (let i = 0; i < nums.length; i++) {
            while (deque.length > 0 && deque[0] <= (i - k)) {
                deque.shift()
            }

            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop()
            }

            deque.push(i)
            if (i >= k - 1) {
                ans.push(nums[deque[0]])
            }
        }

        return ans
    }
}
