class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function solve(i, j, idx) {
            if (idx >= word.length) {
                return true
            }

            if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
                return false
            }

            if (board[i][j] !== word[idx]) {
                return false
            }

            if (board[i][j] == '#') {
                return false
            }

            let temp = board[i][j]
            board[i][j] = '#'
            let directions = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let d = 0; d < directions.length; d++) {
                let rI = i + directions[d][0]
                let rJ = j + directions[d][1]
                if (solve(rI, rJ, idx + 1)) {
                    return true
                }
            }
            board[i][j] = temp
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
