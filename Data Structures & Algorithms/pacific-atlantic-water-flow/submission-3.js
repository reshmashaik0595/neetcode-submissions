class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(grid) {
        let pacificVisited = new Array(grid.length)
        for (let i = 0; i < pacificVisited.length; i++) {
            pacificVisited[i] = new Array(grid[0].length).fill(false)
        }

        let atlanticVisited = new Array(grid.length)
        for (let i = 0; i < atlanticVisited.length; i++) {
            atlanticVisited[i] = new Array(grid[0].length).fill(false)
        }

        function dfs(row, col, prev, isVisited) {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return
            if (isVisited[row][col]) return
            if (grid[row][col] < prev) return
            isVisited[row][col] = true
            let neigh = [
                [-1, 0],
                [0, -1],
                [1, 0],
                [0, 1]
            ]
            for (let i = 0; i < neigh.length; i++) {
                let nRow = row + neigh[i][0]
                let nCol = col + neigh[i][1]
                dfs(nRow, nCol, grid[row][col], isVisited)
            }
        }

        for (let i = 0; i < grid[0].length; i++) {
            dfs(0, i, -Infinity, pacificVisited)
        }

        for (let i = 0; i < grid.length; i++) {
            dfs(i, 0, -Infinity, pacificVisited)
        }

        for (let i = 0; i < grid.length; i++) {
            dfs(i, grid[0].length - 1, -Infinity, atlanticVisited)
        }

        for (let i = 0; i < grid[0].length; i++) {
            dfs(grid.length - 1, i, -Infinity, atlanticVisited)
        }
        let ans = []
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (atlanticVisited[i][j] && pacificVisited[i][j]) {
                    ans.push([i, j])
                }
            }
        }
        return ans
    }
}
