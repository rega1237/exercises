// https://leetcode.com/problems/linked-list-cycle/description/

// Solved using two pointers, slow and fast pointers

var hasCycle = function(head) {

  // Initialize slow a fast pointer
  let slow = head, fast = head;

  while (fast != null && fast.next != null) {
      slow = slow.next // add 1
      fast = fast.next.next // add 2

      if (slow == fast) {
          return true
      }
  }

  return false
};
