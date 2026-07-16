class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.pfMatrix = new Array(matrix.length).fill(0)
        for (let i = 0; i < this.pfMatrix.length; i++) {
            this.pfMatrix[i] = new Array(matrix[0].length).fill(0)
        }

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                if (col == 0) {
                    this.pfMatrix[row][col] = matrix[row][col]
                } else {
                    this.pfMatrix[row][col] = this.pfMatrix[row][col - 1] + matrix[row][col]
                }
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            for (let row = 1; row < matrix.length; row++) {
                this.pfMatrix[row][col] = this.pfMatrix[row - 1][col] + this.pfMatrix[row][col]
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        if (row1 == 0 && col1 == 0) {
            return this.pfMatrix[row2][col2]
        } else if (row1 !== 0 && col1 == 0) {
            return this.pfMatrix[row2][col2] - this.pfMatrix[row1 - 1][col2]
        } else if (row1 == 0 && col1 !== 0) {
            return this.pfMatrix[row2][col2] - this.pfMatrix[row2][col1 - 1]
        } else {
            return this.pfMatrix[row2][col2] - this.pfMatrix[row1 - 1][col2] - this.pfMatrix[row2][col1 - 1] + this.pfMatrix[row1 - 1][col1 - 1]
        }
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
