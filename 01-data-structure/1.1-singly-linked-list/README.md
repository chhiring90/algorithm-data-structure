# SinglyLinkedList

    - Piece of data -> value
    - Reference to next node -> next

1. Pushing Method Pseudocode (Adding new Node in the end)

   - This function should accept a value
   - Create a new node using the value passed to the function
   - If there is no head property on the list, set the head and tail to be the newly created Node
   - otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created Node

2. Popping Method Pseudocode (Removing last Node)

   - If there is no nodes in the list, return undefined
   - loop through the list until you reach the tail
   - Set the next property of the 2nd to last node to be null
   - Set the tail to be the 2nd to last node
   - Decrement the lenfth od list by 1
   - Return the value of node removed

3. Shifting Method Pseudocode (Removing first Node)

   - if there are no nodes, return undefined
   - Store the current head property in variable
   - Set the head property to be the current head's next property
   - Decrement the length by 1
   - Return the value of the node removed

4. Unshifting Method Pseudocode (adding newnode in the first)

   - this function should accept a value
   - create a new node using the value passed to the function
   - if there is no head property on the list, set the head and tail to be the newly created node
   - otherwise set the newly create node's next property to be the current head property on the list
   - Set the head property on the list to be that newly created node
   - Increment the length of the list by 1
   - Return the linked list

5. Get Pseudocode

   - This function should accept an index
   - If the index is less than zero or greater than or equal to the length of the list, return null
   - loop through the list until you reach the index and return the node at that specific index

6. Set Pseudocode

   - This function should accept an index and value
   - Use you get function to find the specific node
   - if the node is not found, return false
   - if the node is found, set the value of that node to be the value passed to the function and return true

7. Insert Pseudocode

   - if the index is less than zero or greater than the length, return false
   - if the index is the same as the length, push a new node to the end of the list
   - if the index is 0, unshift a new node to the start of the list
   - otherwise, using the get Method, access the node at the index
   - set the next property on that node(current) to be the new node
   - set the next property on the new node to be the previous next [currentNode(prev) newNode (currentNode's prev(newNode's prev))]
   - increment the length
   - return true

8. Remove Pseudocode

   - if the index is less than zero or greater than the length return undefined
   - if the index is the same as the (length - 1). pop
   - if the index is 0, shift
   - otherwise, using get method, access the node atr the (index - 1)
   - set the next property on that node to be the next of the next node
   - decrement the length
   - return the value of node removed

9. Reverse Pseudocode
   - swap the head and tail
   - create a variable called next
   - create a variable called prev
   - create a variable called node and initilize it to the head property
   - loop through the list
   - set next to be the next property on whatever node is
   - set the next property on the node to be whatever prev is
