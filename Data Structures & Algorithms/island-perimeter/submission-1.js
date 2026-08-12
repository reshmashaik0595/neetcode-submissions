class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        function dfs(row, col, isVisited) {
            if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
                return 1
            }

            if (grid[row][col] == '0') {
                return 1
            }

            if (isVisited[row][col]) return 0
            isVisited[row][col] = true

            let perimeter = 0
            perimeter = perimeter + dfs(row - 1, col, isVisited)
            perimeter = perimeter + dfs(row, col + 1, isVisited)
            perimeter = perimeter + dfs(row + 1, col, isVisited)
            perimeter = perimeter + dfs(row, col - 1, isVisited)

            return perimeter
        }

        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == '1') {
                    return dfs(row, col, isVisited)
                }
            }
        }
    }
}
