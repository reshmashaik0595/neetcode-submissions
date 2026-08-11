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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let events = []
        for (let i = 0; i < intervals.length; i++) {
            events.push([intervals[i].start, 1])
            events.push([intervals[i].end, -1])
        }
        events = events.sort((a, b) => (a[0] !== b[0]) ? a[0] - b[0] : a[1] - b[1])
        let maxOverLappings = -Infinity
        let currOverLapping = 0
        for (let i = 0; i < events.length; i++) {
            currOverLapping = currOverLapping + events[i][1]
            maxOverLappings = Math.max(maxOverLappings, currOverLapping)
        }
        return maxOverLappings == -Infinity ? 0 : maxOverLappings
    }
}
