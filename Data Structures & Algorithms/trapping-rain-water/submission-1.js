class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxL = new Array(height.length).fill(0)
        let maxR = new Array(height.length).fill(0)

        for (let i = 1; i < height.length; i++) {
            maxL[i] = Math.max(maxL[i - 1], height[i - 1])
        }
        for (let i = height.length - 2; i >= 0; i--) {
            maxR[i] = Math.max(maxR[i + 1], height[i + 1])
        }

        let ans = 0
        for (let i = 1; i < height.length - 1; i++) {
            let area = Math.min(maxL[i], maxR[i]) - height[i]
            if (area > 0) {
                ans = ans + area
            }
        }

        return ans
    }
}
