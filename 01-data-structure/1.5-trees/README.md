# Tree

> A data structure that consists of nodes in a parent/child relationship.
> Lists - linear
> Trees - Non-linear

**Trees Terminology**

1. Root -> the top node in a tree.
2. Child -> A node directly connected to another node when moving away from the root.
3. Parent -> The converse notion of a child.
4. Sibling -> A group of nodes with the same parent.
5. Leaf -> A node with no children.
6. Edge -> The connection between one and another node.

**Binary Search Tree**

- Every parent node has at most two children.
- Every node to the left of a parent node is always less than the parent node.
- Every node to the right of a parent node is always greater than the parent node.

1. Inserting a node

   - Steps :- Iterativaely or Recursively
   - Create a new node
   - Starting at the root node
     - Check if there is a root,
       - if not the root now becomes that a new node
       - if there is a root, check if the value of the new node is greater than or less than the value of the root
     - if it is greater
       - Chech to see if there is a node to the right
       - if there is not, add that node as the right property
     - if it is less
       - Check to see if there is a node to the left
       - if there is not, add that node as the left property

2. Find a node

   - Steps :- Iterativaely or Recursively
   - Starting at the root
     - Check if there is a root, if not - we're done searching
     - if there is a root, check if the value of the new node is the value we are looking for. if we found it, we're done
     - if not, check to see if the value is greater than or less than the value of the root
       - if it is greater
         - check to see if there is a node to the right
           - if there is, move to that node and repeat these steps
           - if there is not, we are done searching!
       - if it is less
         - check to see if there is a node to the left
           - if there is, move to that node are repeat these steps
           - if there is not, we're done searching!

**Tree Traversal**

1. Breadth First Search

   - Create a queue (this can be an array) and a variable ti store the value of nodes visited
   - Place the root node in the queue
   - Loop as long as there is anything in the queue
     - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
     - if there is a left property on the node dequeue - add it to the queue
     - if there is a right property on the node dequeue - add it to the queue
   - Return the variable that stores the values

2. Depth First Inorder

   - Create a variable to store the values of nodes visited
   - Store the root of the BST in variable called current
   - Write a helper function which accepts a node
     - if the node has a left property, call the helper function with the left property on the node
     - Push the vaule of the node to the variable that stores the values
     - If the node has a right property, call the helper function with the right property on the nodes
   - Invoke the helper function with the current variable
   - return the array of values

3. Depth First Preorder

   - Create a variable to store the values of nodes visited
   - Store the root of the BST in variables called current
   - Write a helper function which accepts a node
     - Push the value of the node to the variable that stores the values
     - if the node has a left property, call the helper function with the left property on the node
     - if the node has a right property, call the helper function with the right property on the node
   - Invoke the helper function with the current variable
   - return the array of values

4. Depth First PostOrder

- Create a variable to store the values of nodes visited
- Store the root of the BST in variables called current
- Write a helper function which accepts a node
  - if the node has a left property, call the helper function with the left property on the node
  - if the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- return the array of values
