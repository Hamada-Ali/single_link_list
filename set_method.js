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
    pop() {
        let current = this.head;
        while(current) {
            // current.next = the prvious node before the tail
            if(current.next && current.next.next === null) {
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

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.head;
            this.head = current.next;
            current.next = null;
            this.length--;
            return current;
    }
    unshift(val) { // Adding Nodes To The beginning of The Linked List
        // if the list is empty
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return `Added::: Node Value >> ${newNode.val}`;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return `Added::: Node Value >> ${newNode.val}`;
        }
    }
    get(index) { // done it 
        if (index >= this.length || index <= 0) {
            return "NOT FOUND";
        } 
        let counter = 1;
        let localHead = this.head;
        while (counter < index){
            localHead = localHead.next;
            counter++;
            if (counter === index) {
                return localHead;
        } 
    }
 }
  set(val, index) {
      if (index > this.length || index <= 0) {
      return "NOT FOUND";
    }  if (index === this.length) {
          this.tail.val = val;
           return `New Value Added(${this.tail.val}) to Index ${index} `;
    } 
    let counter = 0;
    this.head = this.head.next;
    while(counter < index) {
      this.head = this.head.next;
      counter++;
      if(counter === index) {
         this.head.val = val;
        return `New Value Added(${this.head.val}) to Index ${index} `;
      }
    }
  }
}
let linkList = new SinglyLinkedList();


linkList.push("vv");
linkList.push("zz");
linkList.push("ss");
linkList.push("xx");
linkList.push("aafsaf");
linkList.push("clagasfgss");
linkList.push("121233");
linkList.push("qq");
