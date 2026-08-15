class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return 0
            if (isVisited[r][c]) return 0
            if (grid[r][c] == 0) return 0
            isVisited[r][c] = true
            let directions = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            let area = 1
            for (let i = 0; i < directions.length; i++) {
                let nRow = r + directions[i][0]
                let nCol = c + directions[i][1]
                area = area + dfs(nRow, nCol)
            }
            return area
        }

        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        let max = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (isVisited[i][j]) continue
                if (grid[i][j] == 1)
                    max = Math.max(max, dfs(i, j))
            }
        }
        return max
    }
}
