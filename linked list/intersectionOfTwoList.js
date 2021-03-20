// Leetcode questions 160
// two linked lists keep iterating, if they hit the end of their lists, restart at the start of the other list until the nodes are matched.

function getIntersectionNode (headA, headB) {
  if(headA == null || headB == null) return null;
  
  let pointer1 = headA;
  let pointer2 = headB;
  
  while(pointer1!==pointer2){
      
      if(pointer1 === pointer2){
          return pointer1
      }
      
      if(pointer1 ==null){
          pointer1 = headB
      }
      if(pointer2 == null){
          pointer2 = headA
      }
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
      
  }
  
  return pointer1
};