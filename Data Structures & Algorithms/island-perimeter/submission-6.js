class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= row || c >= col) return 1
            if (isVisited[r][c]) return 0
            if (grid[r][c] == 0) return 1
            isVisited[r][c] = true
            let directions = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            let permiter = 0
            for (let i = 0; i < directions.length; i++) {
                let nRow = r + directions[i][0]
                let nCol = c + directions[i][1]
                permiter = permiter + dfs(nRow, nCol)
            }
            return permiter
        }

        let row = grid.length
        let col = grid[0].length
        let isVisited = new Array(row)
        for (let i = 0; i < isVisited.length; i++)
            isVisited[i] = new Array(col).fill(false)

        let ans;
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (isVisited[r][c]) continue
                if (grid[r][c] == 1)
                    ans = dfs(r, c)
            }
        }
        return ans
    }
}
