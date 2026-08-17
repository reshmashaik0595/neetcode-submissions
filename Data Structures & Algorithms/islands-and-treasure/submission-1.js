class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = []
        let front = 0
        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 0) {
                    queue.push([i, j, 0])
                    isVisited[i][j] = true
                }
            }
        }

        while (front < queue.length) {
            let len = queue.length - front
            for (let i = 0; i < len; i++) {
                let cell = queue[front++]
                let neigh = [
                    [-1, 0],
                    [0, -1],
                    [1, 0],
                    [0, 1]
                ]
                for (let i = 0; i < neigh.length; i++) {
                    let r = cell[0] + neigh[i][0]
                    let c = cell[1] + neigh[i][1]
                    let d = cell[2] + 1
                    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) continue
                    if (grid[r][c] == -1) continue
                    if (isVisited[r][c]) continue
                    queue.push([r, c, d])
                    grid[r][c] = d
                    isVisited[r][c] = true
                }
            }
        }
        return grid
    }
}
