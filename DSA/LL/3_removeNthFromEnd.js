/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head === null) return head;

    // let curr = head;
    // let size = 0;
    // while (curr !== null) {
    //     curr = curr.next;
    //     size++;
    // }

    // if(n > size) {
    //     return head;
    // }

    // size = size - n;
    // if(size === 0){ // removing head
    //     return head.next;
    // }


    // curr = head;
    // while(size > 1){
    //     curr = curr.next;
    //     size--;
    // }

    // curr.next = curr.next.next;

    // return head;


    //Optimal:
    let start = new ListNode(0, head); // means start.next = head;
    let slow = start;
    let fast = start;

    for(let  i=1; i<=n ; i++){
        fast = fast.next;
    }
    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return start.next;

};