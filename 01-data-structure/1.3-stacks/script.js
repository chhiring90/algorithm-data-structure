class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    print() {
        if (!this.first) return null;
        let current = this.first;
        let values = [];

        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

const stack = new Stack();

stack.push("First");
stack.push("Second");
stack.push("Third");