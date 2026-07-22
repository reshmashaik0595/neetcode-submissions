/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomLeft = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        let n = grid.length
        return this.solve(grid, 0, 0, n)
    }

    solve(grid, row, col, n) {
        if (this.areSame(grid, row, col, n)) {
            return new Node(grid[row][col] == 1, true)
        } else {
            let root = new Node(true, false)
            root.topLeft = this.solve(grid, row, col, n / 2)
            root.topRight = this.solve(grid, row, col + n / 2, n / 2)
            root.bottomLeft = this.solve(grid, row + n / 2, col, n / 2)
            root.bottomRight = this.solve(grid, row + n / 2, col + n / 2, n / 2)
            return root
        }
    }

    areSame(grid, row, col, n) {
        let val = grid[row][col]
        for (let i = row; i < row + n; i++) {
            for (let j = col; j < col + n; j++) {
                if (grid[i][j] !== val) {
                    return false
                }
            }
        }
        return true
    }
}
