class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        let right = matrix.length * matrix[0].length - 1
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            let col =  mid % matrix[0].length
            let row = Math.floor(mid / matrix[0].length)
            if (matrix[row][col] == target) {
                return true
            }

            if (matrix[row][col] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false
    }
}
