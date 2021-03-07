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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let currentNode = this.head;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    set(index, val) {
        const currentNode = this.get(index);
        if (!currentNode) return false;
        currentNode.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let currentNode = this.get(index);
        let currentNodeNext = currentNode.next;
        currentNode.next = newNode;
        newNode.next = currentNodeNext;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (this.length - 1 === index) return this.pop();
        if (index === 0) return this.shift();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;

        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        debugger;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();