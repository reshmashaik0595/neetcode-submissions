class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length - 1
        let max = 0
        while (i <= j) {
            let height = Math.min(heights[i], heights[j])
            let width = j - i
            let area = width * height
            max = Math.max(max, area)
            if (heights[i] < heights[j]) {
                i++
            } else {
                j--
            }
        }
        return max
    }
}
