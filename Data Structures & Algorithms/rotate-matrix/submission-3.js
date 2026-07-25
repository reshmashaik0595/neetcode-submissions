class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        function transpose(matrix) {
            let row = 0
            let col = 0
            while (row < matrix.length && col < matrix[0].length) {
                for (let i = col + 1; i < matrix[0].length; i++) {
                    let tmp = matrix[row][i]
                    matrix[row][i] = matrix[i][row]
                    matrix[i][row] = tmp
                }
                row++
                col++
            }

            for (let row = 0; row < matrix.length; row++) {
                reverse(matrix[row])
            }
            return matrix
        }

        function reverse(arr) {
            let i = 0
            let j = arr.length - 1
            while (i <= j) {
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
                i++
                j--
            }
            return arr
        }
        transpose(matrix)
    }
}
