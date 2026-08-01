class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let events = []
        for (let i = 0; i < trips.length; i++) {
            events.push([trips[i][1], trips[i][0]])
            events.push([trips[i][2], -1 * trips[i][0]])
        }
        events = events.sort((a, b) => (a[0] - b[0]))
        let curr_cap = 0
        for (let i = 0; i < events.length; i++) {
            curr_cap = curr_cap + events[i][1]
            if (curr_cap > capacity) return false
        }
        return true
    }
}
