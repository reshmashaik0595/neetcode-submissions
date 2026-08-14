class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        function dfs(row, col, prev, isVisited) {
            if (row < 0 || col < 0 || row >= heights.length || col >= heights[0].length) return
            if (isVisited[row][col]) return
            if (prev > heights[row][col]) return
            isVisited[row][col] = true
            let neigh = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]
            ]
            for (let i = 0; i < neigh.length; i++) {
                let adjRow = row + neigh[i][0]
                let adCol = col + neigh[i][1]
                dfs(adjRow, adCol, heights[row][col], isVisited)
            }
        }

        let pacific = new Array(heights.length)
        for (let i = 0; i < pacific.length; i++) {
            pacific[i] = new Array(heights[0].length).fill(false)
        }

        let atlantic = new Array(heights.length)
        for (let i = 0; i < atlantic.length; i++) {
            atlantic[i] = new Array(heights[0].length).fill(false)
        }

        let ans = []
        // Pacific - top
        for (let col = 0; col < heights[0].length; col++)
            dfs(0, col, -Infinity, pacific)

        // Pacific - left
        for (let row = 0; row < heights.length; row++)
            dfs(row, 0, -Infinity, pacific)

        // Atlantic - bottom
        for (let col = 0; col < heights[0].length; col++)
            dfs(heights.length - 1, col, -Infinity, atlantic)

        // Atlantic - right
        for (let row = 0; row < heights.length; row++)
            dfs(row, heights[0].length - 1, -Infinity, atlantic)

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    ans.push([i, j])
                }
            }
        }
        return ans
    }
}


// 1 1 1 1 1 1
// 1 1 1 1 1 1
// 1 1 1 1 1 1
// 1 1 1 1 1 1
// 1 1 1 1 1 1
