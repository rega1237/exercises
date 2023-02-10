# https://leetcode.com/problems/linked-list-cycle/description/

def hasCycle(head)
  slow = head
  fast = head

  while fast && fast.next
      slow = slow.next
      fast = fast.next.next

      if slow == fast
        return true
      end
  end
  false
end
