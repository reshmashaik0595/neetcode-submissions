/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        function areSame(grid, row, col, n) {
            let init = grid[row][col]
            for (let i = row; i < row + n; i++) {
                for (let j = col; j < col + n; j++) {
                    if (grid[i][j] !== init) {
                        return false
                    }
                }
            }
            return true
        }

        function solve(grid, row, col, n) {
            if (areSame(grid, row, col, n)) {
                return new Node(grid[row][col] == 1, true)
            } else {
                let root = new Node(true, false)
                root.topLeft = solve(grid, row, col, n / 2)
                root.topRight = solve(grid, row, col + n / 2, n / 2)
                root.bottomLeft = solve(grid, row + n / 2, col, n / 2)
                root.bottomRight = solve(grid, row + n / 2, col + n / 2, n / 2)
                return root
            }
        }
        return solve(grid, 0, 0, grid.length)
    }
}
