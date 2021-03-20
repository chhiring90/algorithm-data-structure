# Queue

- A FIFO data structure
- The First element added to stack will be the first element removed from stack

1. Enqueue Pseudocode

   - This function accepts some value
   - Create a new node using that value passed to the function
   - If there are no nodes in the queue, set this node to be the - first and last property of the queue
   - Otherwise, set the next property on the current last to be - that node, and then set the last property of the queue to be that node
   - Increment the size of the queue by 1

2. Dequeue Pseudocode

   - If there is no first property, just return null
   - Store the first property in a variable
   - See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
   - If there is more than 1 node, set the first property to be the next property of first
   - Decrement the size by 1
   - Return the value of the node dequeued

3. Print Pseudocode
   - If the first is null return null
   - Create an empty Array
   - Loop through the stacks and push value in array and return created array
