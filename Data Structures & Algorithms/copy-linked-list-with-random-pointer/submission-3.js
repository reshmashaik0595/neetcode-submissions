// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let nodeMap = new Map()

        let temp = new Node(-1)
        let dummy = temp

        let curr = head
        while (curr !== null) {
            let nn = new Node(curr.val)
            nodeMap.set(curr, nn)
            dummy.next = nn
            dummy = dummy.next
            curr = curr.next
        }


        curr = head
        dummy = temp.next
        while (curr !== null) {
            console.log(nodeMap.get(curr))
            let rNode = nodeMap.get(curr.random)
            dummy.random = rNode

            dummy = dummy.next
            curr = curr.next
        }

        return temp.next
    }
}
