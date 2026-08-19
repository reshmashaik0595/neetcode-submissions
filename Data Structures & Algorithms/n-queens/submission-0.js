class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        function isValid(board, row, col) {
            for (let r = row - 1; r >= 0; r--) {
                if (board[r][col] == 'Q') {
                    return false
                }
            }

            for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
                if (board[r][c] == 'Q') {
                    return false
                }
            }
            for (let r = row - 1, c = col + 1; r >= 0 && c < board.length; r--, c++) {
                if (board[r][c] == 'Q') {
                    return false
                }
            }

            return true

        }

        function solve(board, row) {
            if (row >= board.length) {
                result.push(board.map(row => row.join('')))
                return
            }
            for (let col = 0; col < board[0].length; col++) {
                if (isValid(board, row, col)) {
                    board[row][col] = 'Q'
                    solve(board, row + 1)
                    board[row][col] = '.'
                }
            }
        }

        let result = []
        let board = new Array(n)
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(n).fill('.')
        }
        solve(board, 0)
        return result
    }
}
