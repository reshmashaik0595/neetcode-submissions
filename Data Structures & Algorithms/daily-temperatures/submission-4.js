class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let NGL = new Array(temperatures.length).fill(0)
        let stack = [temperatures.length - 1]
        for (let i = temperatures.length - 2; i >= 0; i--) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop()
            }
            if(stack.length > 0){
                NGL[i] = stack[stack.length - 1] - i
            }
            stack.push(i)
        }

        return NGL
    }
}
