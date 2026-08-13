class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let isVisited = new Array(grid.length)
        for (let i = 0; i < isVisited.length; i++) {
            isVisited[i] = new Array(grid[0].length).fill(false)
        }

        let queue = []
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == 0) {
                    queue.push([row, col, 0])
                    isVisited[row][col] = true
                }
            }
        }

        let front = 0
        while (front < queue.length) {
            let len = queue.length - front
            for (let i = 0; i < len; i++) {
                let node = queue[front++]
                let row = node[0]
                let col = node[1]
                let dist = node[2]
                let neighbors = [
                    [0, -1],
                    [-1, 0],
                    [0, 1],
                    [1, 0]
                ]
                for (let i = 0; i < neighbors.length; i++) {
                    let adjRow = row + neighbors[i][0]
                    let adjCol = col + neighbors[i][1]
                    if (adjRow < 0 || adjCol < 0 || adjRow >= grid.length || adjCol >= grid[0].length) continue
                    if (grid[adjRow][adjCol] == -1) continue
                    if (isVisited[adjRow][adjCol]) continue
                    grid[adjRow][adjCol] = dist + 1
                    queue.push([adjRow, adjCol, dist + 1])
                    isVisited[adjRow][adjCol] = true
                }
            }
        }
        return grid
    }
}
