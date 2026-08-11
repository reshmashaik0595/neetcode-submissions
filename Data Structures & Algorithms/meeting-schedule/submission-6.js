/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let events = []
        for (let i = 0; i < intervals.length; i++) {
            events.push([intervals[i].start, 1])
            events.push([intervals[i].end, -1])
        }
        events = events.sort((a, b) => a[0] - b[0])
        let curr = 0
        for (let i = 0; i < events.length; i++) {
            curr = curr + events[i][1]
            if (curr > 1) return false
        }
        return true
    }
}
