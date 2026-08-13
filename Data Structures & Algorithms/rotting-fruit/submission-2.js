class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        function bfs(grid) {
            let front = 0
            while (front < queue.length) {
                let len = queue.length - front
                for (let i = 0; i < len; i++) {
                    let node = queue[front++]
                    let row = node[0]
                    let col = node[1]
                    let dist = node[2]
                    let neigh = [
                        [-1, 0],
                        [0, -1],
                        [0, 1],
                        [1, 0]
                    ]

                    for (let i = 0; i < neigh.length; i++) {
                        let nRow = row + neigh[i][0]
                        let nCol = col + neigh[i][1]
                        if (
                            nRow < 0 ||
                            nRow >= grid.length ||
                            nCol < 0 ||
                            nCol >= grid[0].length
                        ) continue
                        if (grid[nRow][nCol] == 0) continue
                        if (isVisited[nRow][nCol]) continue
                        if (grid[nRow][nCol] !== 1) continue
                        isVisited[nRow][nCol] = true
                        queue.push([nRow, nCol, dist + 1])
                        freshOranges--
                    }
                }
            }
            return queue[queue.length - 1][2]
        }

        let queue = []
        let freshOranges = 0
        let isVisited = new Array(grid.length)
        for (let i = 0; i < grid.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == 2) {
                    queue.push([row, col, 0])
                    isVisited[row][col] = true
                } else if (grid[row][col] == 1) {
                    freshOranges++
                }
            }
        }
        if (freshOranges === 0) return 0
        if (queue.length == 0) return -1
        let ans = bfs(grid)
        if (freshOranges !== 0) return -1
        return ans
    }
}
