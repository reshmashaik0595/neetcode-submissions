class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (!this.isRowValid(board)) return false
        if (!this.isColValid(board)) return false
        if (!this.isGridValid(board)) return false
        return true
    }

    isRowValid(board) {
        for (let row = 0; row < board.length; row++) {
            let hasSeen = new Set()
            for (let col = 0; col < board[0].length; col++) {
                if (board[row][col] == '.') continue
                if (hasSeen.has(board[row][col])) {
                    return false
                }
                hasSeen.add(board[row][col])
            }
        }
        return true
    }

    isColValid(board) {
        for (let col = 0; col < board[0].length; col++) {
            let hasSeen = new Set()
            for (let row = 0; row < board.length; row++) {
                if (board[row][col] == '.') continue
                if (hasSeen.has(board[row][col])) {
                    return false
                }
                hasSeen.add(board[row][col])
            }
        }
        return true
    }

    isGridValid(board) {
        for (let row = 0; row < board.length; row = row + 3) {
            for (let col = 0; col < board[0].length; col = col + 3) {
                if (!this.isBoxValid(row, col, board))
                    return false
            }
        }
        return true
    }

    isBoxValid(r, c, board) {
        let rL = r + 2
        let cL = c + 2
        let hasSeen = new Set()
        for (let row = r; row <= rL; row++) {
            for (let col = c; col <= cL; col++) {
                if (board[row][col] == '.') continue
                if (hasSeen.has(board[row][col])) {
                    return false
                }
                hasSeen.add(board[row][col])
            }
        }
        return true
    }
}
