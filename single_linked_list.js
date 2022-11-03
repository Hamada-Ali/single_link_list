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
  }

let list = new SLinkedList();

list.push('head');
list.push('second Node')
