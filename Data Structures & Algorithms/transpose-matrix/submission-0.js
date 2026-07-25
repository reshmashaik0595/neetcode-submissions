class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let ans = new Array(matrix[0].length)
        for (let i = 0; i < ans.length; i++) {
            ans[i] = new Array(matrix.length).fill(0)
        }

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                ans[col][row] = matrix[row][col]
            }
        }
        return ans
    }
}
