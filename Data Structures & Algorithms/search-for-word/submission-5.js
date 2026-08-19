class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function solve(r, c, idx) {
             if (idx == word.length) return true
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return false
           
            if (board[r][c] == '#') return false
            if (board[r][c] !== word[idx]) return false
            let tmp = board[r][c]
            board[r][c] = '#'
            let directions = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let i = 0; i < directions.length; i++) {
                let nRow = r + directions[i][0]
                let nCol = c + directions[i][1]
                if (solve(nRow, nCol, idx + 1)) {
                    return true
                }
            }
            board[r][c] = tmp
            return false
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == word[0]) {
                    if (solve(i, j, 0)) {
                        return true
                    }
                }
            }
        }

        return false
    }
}
