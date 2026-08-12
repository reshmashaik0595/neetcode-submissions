class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return 1
            if (grid[row][col] == 0) return 1
            if (isVisited[row][col]) return 0
            isVisited[row][col] = true
            let perimter = 0
            perimter = perimter + dfs(row + 1, col)
            perimter = perimter + dfs(row - 1, col)
            perimter = perimter + dfs(row, col + 1)
            perimter = perimter + dfs(row, col - 1)
            return perimter
        }
        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1)
                    return dfs(i, j)
            }
        }
    }
}
