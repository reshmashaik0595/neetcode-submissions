class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let isFirstRowImpacted = false
        let isFirstColImpacted = false
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[0][i] == 0) {
                isFirstRowImpacted = true
                break
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] == 0) {
                isFirstColImpacted = true
                break
            }
        }

        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0
                    matrix[0][j] = 0
                }
            }
        }

        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0
                }
            }
        }

        if (isFirstRowImpacted) {
            for (let i = 0; i < matrix[0].length; i++) {
                matrix[0][i] = 0
            }

        }

        if (isFirstColImpacted) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][0] = 0
            }
        }

        return matrix
    }
}
