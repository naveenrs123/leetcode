// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Iterative
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Recursive
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null) return head;

    let newHead = head;
    if (head.next !== null) {
        newHead = reverseList(head.next);
        head.next.next = head;
    }

    head.next = null;
    return newHead;
};
