class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        let queue = []
        let front = 0
        let rotten = 0
        let fresh = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 2) {
                    queue.push([i, j, 0])
                    isVisited[i][j] = true
                    rotten++
                } else if (grid[i][j] == 1) {
                    fresh++
                }
            }
        }

        if (fresh == 0) return 0

        while (front < queue.length) {
            let len = queue.length - front
            for (let i = 0; i < len; i++) {
                let cell = queue[front++]
                let neigh = [
                    [-1, 0],
                    [0, -1],
                    [0, 1],
                    [1, 0]
                ]
                for (let i = 0; i < neigh.length; i++) {
                    let nRow = cell[0] + neigh[i][0]
                    let nCol = cell[1] + neigh[i][1]
                    let d = cell[2] + 1
                    if (nRow < 0 || nCol < 0 || nRow >= grid.length || nCol >= grid[0].length) continue
                    if (grid[nRow][nCol] == 0) continue
                    if (isVisited[nRow][nCol]) continue
                    queue.push([nRow, nCol, d])
                    isVisited[nRow][nCol] = true
                    fresh--
                }
            }
        }

        if (fresh > 0) return -1
        return queue[queue.length - 1][2]
    }
}
