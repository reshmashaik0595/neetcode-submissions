class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let NSL = this.NSL(heights)
        let NSR = this.NSR(heights)
        let max = -Infinity
        for (let i = 0; i < heights.length; i++) {
            console.log(heights[i], NSL[i], NSR[i])
            let area = heights[i] * ((NSR[i] - 1) - (NSL[i] + 1) + 1)
            max = Math.max(max, area)
        }
        return max
    }

    NSL(heights) {
        let ans = new Array(heights.length).fill(-1)
        let stack = []
        for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }

            if (stack.length > 0) {
                ans[i] = stack[stack.length - 1]
            }
            stack.push(i)
        }
        return ans
    }

    NSR(heights) {
        let ans = new Array(heights.length).fill(heights.length)
        let stack = []
        for (let i = heights.length - 1; i >= 0; i--) {
            while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop()
            }
            if (stack.length > 0) {
                ans[i] = stack[stack.length - 1]
            }
            stack.push(i)
        }
        return ans
    }
}
