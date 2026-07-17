class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = []
        for (let i = 0; i < asteroids.length; i++) {
            let curr = asteroids[i]
            while (stack.length > 0
                && stack[stack.length - 1] > 0
                && curr < 0) {
                let sum = stack[stack.length - 1] + curr
                if (sum == 0) {
                    curr = 0
                    stack.pop()
                } else if (sum > 0) {
                    curr = 0
                } else {
                    stack.pop()
                }
            }

            if (curr !== 0) {
                stack.push(curr)
            }
        }
        return stack
    }
}
