class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let arr = []
        for (let i = 0; i < trips.length; i++) {
            arr.push([trips[i][1], trips[i][0]])
            arr.push([trips[i][2], -1 * trips[i][0]])
        }
        arr = arr.sort((a, b) => a[0] - b[0])
        let curr_pass_count = 0
        for(let i = 0; i < arr.length; i++){
            curr_pass_count = curr_pass_count + arr[i][1]
            if(curr_pass_count > capacity) return false
        }
        return true
    }
}
