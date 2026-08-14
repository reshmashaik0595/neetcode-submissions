class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(grid) {
        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return
            if (grid[row][col] == 'X') return
            if (isVisited[row][col]) return
            isVisited[row][col] = true
            grid[row][col] = '#'
            let neigh = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let i = 0; i < neigh.length; i++) {
                let adjRow = row + neigh[i][0]
                let adjCol = col + neigh[i][1]
                dfs(adjRow, adjCol)
            }
        }

        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }

        for (let i = 0; i < grid[0].length; i++) {
            if (grid[0][i] == 'O')
                dfs(0, i)
        }

        for (let i = 0; i < grid.length; i++) {
            if (grid[i][0] == 'O')
                dfs(i, 0)
        }

        for (let i = 0; i < grid.length; i++) {
            if (grid[i][grid[0].length - 1] == 'O')
                dfs(i, grid[0].length - 1)
        }

        for (let i = 0; i < grid[0].length; i++) {
            if (grid[grid.length - 1][i] == 'O')
                dfs(grid.length - 1, i)
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 'O') grid[i][j] = 'X'
            }
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '#') grid[i][j] = 'O'
            }
        }

        return grid
    }
}
