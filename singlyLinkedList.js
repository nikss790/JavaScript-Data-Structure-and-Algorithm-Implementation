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
     /**
      * 
      * @param {*} val 
      * this method will a node at the end of linked list with time complexity O(1)
      */
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
 * this is for deleting the tail element or last element in linked list i.e. deletion of last node 
 * but one edge case is not covered if  there is only head
 * with time complexity O(1)
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
  * Shift will delete the head node i.e. first element of the linked list
  * with time complexity O(1)
  */
 shift(){
    if (!this.head) return undefined;
    // var currentHead = this.head;
    this.head= this.head.next
    this.length--
    return this
    
 }
 /**
  * Unshift will add the one new element to the begining of the existing or new linked list with null or empty
  * with time complexity O(1)
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
 /**
  * traverse through list to seach one particular value and it will have time complexity O(n)
  */
 get(index){
    var current =  this.head;
     if(index <0 || index>=this.length) return null;
     for(let i=0; i<this.length-1;i++){
         
         if(i !== index){
            current = current.next;
         } 
         else{
         return current;
         }
     }
    /**
     * Below is alternate solution using WHILE loop with time complexity O(n)
     */
    // if(index <0 || index>=this.length) return null;
    // var counter = 0;
    // var current = this.head;
    // while(counter!==index){
    //     current =  current.next;
    //     counter++
    // }
    // return current;
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
console.log("after get : "+ JSON.stringify(list.get(1)));