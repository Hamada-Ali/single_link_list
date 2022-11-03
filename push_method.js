class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLinkedList { // linkedList Class reseved in js
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; // make the previous talk point to the new tale
            this.tail = newNode;  // make the tale pointing to the new Node
        }
        this.length++;
        return this;
    }
}

let list = new SLinkedList();

list.push('head');
list.push('second Node')