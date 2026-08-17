class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let isVisited = new Array(board.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(board[0].length).fill(false)
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (isVisited[i][j]) continue
                if ((i == 0 || j == 0 || i == board.length - 1 || j == board[0].length - 1) && board[i][j] == 'O') {
                    dfs(i, j)
                }
            }
        }

        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return
            if (isVisited[r][c]) return
            if (board[r][c] == 'X') return
            isVisited[r][c] = true
            board[r][c] = '#'
            let neigh = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let i = 0; i < neigh.length; i++) {
                let nRow = r + neigh[i][0]
                let nCol = c + neigh[i][1]
                dfs(nRow, nCol)
            }
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X'
                }
            }
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == '#') {
                    board[i][j] = 'O'
                }
            }
        }

        return board
    }
}
