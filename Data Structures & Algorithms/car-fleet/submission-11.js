class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = []
        for (let i = 0; i < position.length; i++) {
            arr.push([position[i], speed[i]])
        }
        arr = arr.sort((a, b) => a[0] - b[0])

        let stack = []
        for (let i = arr.length - 1; i >= 0; i--) {
            let time = (target - arr[i][0]) / arr[i][1]
            while (stack.length == 0 || time > stack[stack.length - 1]) {
                stack.push(time)
            }
        }
        return stack.length
    }
}
