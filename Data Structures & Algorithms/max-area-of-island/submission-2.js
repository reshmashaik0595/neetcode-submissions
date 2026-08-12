class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return 0
            if (grid[row][col] == 0) return 0
            if (isVisited[row][col]) return 0
            isVisited[row][col] = true
            let area = 1
            area = area + dfs(row + 1, col)
            area = area + dfs(row - 1, col)
            area = area + dfs(row, col + 1)
            area = area + dfs(row, col - 1)
            return area
        }

        let maxArea = 0
        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (!isVisited[row][col] && grid[row][col] == 1) {
                    maxArea = Math.max(maxArea, dfs(row, col))
                }
            }
        }
        return maxArea
    }
}
