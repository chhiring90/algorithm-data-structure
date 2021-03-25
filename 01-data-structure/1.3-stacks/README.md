# Stacks

- A LIFO data structure
- The last element added to stack will be the first element removed from stack

1. Pushing Pseudocode

   - This function should accept a value
   - Create a new node with value
   - If there are no nodes in the stack set the first and last property to be the newly created node
   - If there is at least one node, create a variable that stores the current first property on the stack
   - reset the first property on the newly created node
   - Set the next property on the node to be the previously created variable
   - Increment the size of the stack by 1

2. Pop Pseudocode

   - If there are no nodes in the stack return null
   - Create a temporary variable to store the first property on the stack
   - If there are only one node, set the first and last property to be null
   - If there are more than one node, set the first property to be the next property on the current first
   - Decrement the size by 1
   - Return the value of removed node

3. Print Pseudocode
   - If the first is null return null
   - Create an empty Array
   - Loop through the stacks and push value in array and return created array
