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
         * If condition is bascially handling the edge case i.e. if linked list is empty and inserting element at the last
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
/**
 * this is for deleting the tail element i.e. deletion of last node but one edge case is not covered of there is only on head
 */
     pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail =  current;
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        return current;
 }
 /**
  * Shift will delete the head node
  */
 shift(){
    if (!this.head) return undefined;
    // var currentHead = this.head;
    this.head= this.head.next
    this.length--
    return this
    
 }
 /**
  * Unshift will add the one new element to the begining
  */
 unshift(val){
     var newNode = new Node(val)
     if(!this.head){
         this.head = newNode;
         this.tail = newNode;
     } 
     else{
     newNode.next = this.head;
     this.head = newNode;
     }
     this.length++
     return this;

 }
}
var list = new SinglyLinkedList();
list.push("firstData");
list.push("secondData");
list.push("thirdData");
console.log("before deletion, element count is : " + list.length)
list.pop();
console.log("after pop : " + JSON.stringify(list));
list.shift();
console.log("after shift : " + JSON.stringify(list));
list.unshift("newData");
console.log("after unshift : "+ JSON.stringify(list));