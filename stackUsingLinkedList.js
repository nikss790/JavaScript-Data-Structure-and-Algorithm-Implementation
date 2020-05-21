class Node {
    constructor(val){
    this.val = val;
    this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }
    push(val) {
        var newNode =  new Node(val)
        if(!this.first){
            this.first = newNode
            this.last =  newNode
            this.length++
        }
        else{
            newNode.next = this.first
            this.first = newNode
            this.length++
        }
        return this;
    }
    pop(){
        if(!this.first) return "no nodes to be removed"
        var removedNode = this.first;
        this.first = this.first.next;
        this.length--
        return removedNode.val;
    }
}
var stack = new Stack();
stack.push("first element");
stack.push("second element");
stack.push("third element");
console.log(stack);
console.log(stack.pop());

