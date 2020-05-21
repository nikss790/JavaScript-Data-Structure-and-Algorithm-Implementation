class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;   
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val;
        this.head = null;
        this.tail = null;
        this.next = null;
        this.length = 0;  
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            
        }
        this.length++
        return this;
    }
    reverse(){
        var firstNode =  this.head;
        this.head = this.tail;
        this.tail = firstNode;
        let counter = 0;
        let prev = null;
        let next;

        while(counter < this.lenght){
            
            next = firstNode.next;
            firstNode.prev = next;
            firstNode.next = prev;
            prev = firstNode;
            firstNode = next;
            counter++
        }
        return this;
    }
}
var dll = new DoublyLinkedList();
dll.push(5);
dll.push(10);
dll.push(15);
dll.push(20);
console.log(dll);
dll.reverse()
console.log(dll)