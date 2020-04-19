/**
 * Linked list is collection of nodes which further contains Data and Reference to Next node.
 * In this implementation , we need to two variable 
 * first variable is 'val' for data and second is 'next' to be used as reference to next node.
 */

 class Node{
     constructor(val){
     this.val=val;
     this.next=null;
 }
}
// Below code is normal way to visualize the linked list
// var first = new Node("hi");
// first.next = new Node("how");
// first.next.next = new Node("are");
// first.next.next.next = new Node("you");
// console.log(first);
/**
 * we will create a SinglyLinkedList class and as we know linked list has 3 main property 
 * such as 'head', 'tail' and 'lenght'.
 */

 class SinglyLinkedList {
     constructor(){
         this.head=null;
         this.tail=null;
         this.length=0;

     }
     push(val){
        var newNode = new Node(val);
        /**
         * If condition is bascially handling the edge case i.e. if linked list is empty
         */
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            
        }
        else{
            /**
             * this is now normal flow
             */
            this.tail.next = newNode;
            this.tail=newNode;
            
        }
        this.length++;
        return this;
        
     }
    
    
 }
 var list = new SinglyLinkedList();
list.push("firstData");
list.push("secondData");
list.push("thirdData");
console.log(list);