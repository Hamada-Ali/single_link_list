class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // my unique solution
    pop() {
        let current = this.head;
        while(current) {
            // current.next = the prvious node before the tail and current.next.next = the tail
            if(current.next && current.next.next === null) { // the second to last node
                current.next= null;
                this.tail = current;
                this.length--;
                if (this.length === 1) {
                    this.head = null;
                    this.tail = null;
                    this.length--;
                    return undefined;
                }
                return current;
            }
            current = current.next; // if the we didn't match first time move to the next node
        }
    }
}

// create linked list instance
let linkList = new SinglyLinkedList();


linkList.push("vv");
linkList.push("zz");
linkList.push("ss");
linkList.push("xx");
linkList.push("aafsaf");
linkList.push("clagasfgss");
linkList.push("121233");
linkList.push("qq");

linkList.pop();
linkList.pop();
linkList.pop();