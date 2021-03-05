class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
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
        if (!this.head) return undefined;
        let nextNode = this.head;
        let newTail;

        while (nextNode.next) {
            newTail = nextNode;
            nextNode = newTail.next;
            console.log({ newTail, nextNode });
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = newTail;
            newTail.next = null;
        }

        this.length--;
        return nextNode;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead.val;
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }

        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();

list.push('First');
list.push('Second');
list.push('Last');
console.log(list);
list.unshift("Grand first 😊");
console.log(list);