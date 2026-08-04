class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let dir = 1
        let left = 0
        let right = matrix[0].length - 1
        let bottom = matrix.length - 1
        let top = 0
        let ans = []
        while (left <= right && top <= bottom) {
            if (dir == 1) {
                for (let i = left; i <= right; i++) {
                    ans.push(matrix[top][i])
                }
                dir++
                top++
            } else if (dir == 2) {
                for (let i = top; i <= bottom; i++) {
                    ans.push(matrix[i][right])
                }
                dir++
                right--
            } else if (dir == 3) {
                for (let i = right; i >= left; i--) {
                    ans.push(matrix[bottom][i])
                }
                dir++
                bottom--
            } else {
                for (let i = bottom; i >= top; i--) {
                    ans.push(matrix[i][left])
                }
                dir = 1
                left++
            }
        }
        return ans
    }
}
