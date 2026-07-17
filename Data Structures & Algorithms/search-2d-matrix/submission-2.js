class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0
        let h = matrix.length * matrix[0].length - 1
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            let r = Math.floor(mid / matrix[0].length)
            let c = mid % matrix[0].length
            if (matrix[r][c] == target) return true
            if (matrix[r][c] < target) l = mid + 1
            else h = mid - 1
        }

        return false
    }
}
