class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while (true) {
                if (current.value === value) return undefined;

                if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                } else if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root, found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(value) {
        if (this.root === null) return false;
        var current = this.root, found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true
            }
        }

        if (!found) return undefined;
        return current;
    }

    breadthFirstSearch() {
        var node = this.root,
            data = [],
            queue = [];

        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    depthFirstInOrder() {
        var data = [],
            current = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(current);
        return data;
    }

    depthFirstPreOrder() {
        var data = [],
            current = this.root;

        function traverse(node) {
            data.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(current);
        return data;
    }

    depthFirstPostOrder() {
        var data = [],
            current = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
}

/*
    10
  6   	 15
3 8 	   20
*/

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log(tree);