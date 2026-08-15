class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return
            if (isVisited[r][c]) return
            if (grid[r][c] == '0') return
            isVisited[r][c] = true
            let directions = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let i = 0; i < directions.length; i++) {
                let nRow = r + directions[i][0]
                let nCol = c + directions[i][1]
                dfs(nRow, nCol)
            }
        }

        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }

        let count = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (isVisited[i][j]) continue
                if (grid[i][j] == '1') {
                    count++
                    dfs(i, j)
                }
            }
        }
        return count
    }
}
