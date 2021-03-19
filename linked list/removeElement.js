function removeElements(head,val){
  let currentNode = new ListNode(-1);
  currentNode.next = head;
  head = currentNode;

  while(currentNode.next){
    if(currentNode.next.val === val){
       currentNode.next = currentNode.next.next;
    }
    else{
      currentNode = currentNode.next
    }
  }
  return head.next;
}