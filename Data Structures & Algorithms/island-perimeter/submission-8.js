class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length)
                return 1
            if (isVisited[row][col]) return 0
            if (grid[row][col] == 0) return 1
            isVisited[row][col] = true
            let perimeter = 0
            let neighbors = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let i = 0; i < neighbors.length; i++) {
                let neigRow = row + neighbors[i][0]
                let neigCol = col + neighbors[i][1]
                perimeter = perimeter + dfs(neigRow, neigCol)
            }
            return perimeter
        }

        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) return dfs(i, j)
            }
        }
    }
}
