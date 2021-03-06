# DoublyLinkedList

- Piece of data -> value
- Reference to next node -> next
- Reference to prev node -> prev

1. Pushing Pseudocode

   - Create a new node with tha value passed to the function
   - if the head property is null set the head and tail to be the newly created node
   - if not, set the next property on the tail to be that node
   - set the previous property on the newly created node top be the tail
   - set the tail to be the newly created node
   - increament the length
   - return the doublly linked list

2. Popping Pseudocode

   - If the is no head, return undefined
   - Store the current tail in a variable to return later
   - if the length is 1, set the head and tail to be null
   - update the tail to be the previous node
   - set the newTail's next to null
   - decrement the length
   - return the value removed

3. Shifting Pseudocode

   - if the length 0, return undefined
   - Store the current head property in a variable (we'll have call it old head)
   - if the length is 1
     - set the head to be null
     - set the tail to be null
   - update the head to be the next of the old head
   - set the head's prev property to null
   - set the old head's next to null
   - decrement the length
   - return old head

4. Unshifting Pseudocode

   - Create a new node with the value passed in function
   - if the length is 0
     - set the head to be the new node
     - set the tail to be the new node
   - otherwise
     - set the prev property on the head of the list to be the new node
     - set the next property on the new node to be the head property
     - update the head to be the new node
   - increament the length
   - return the list

5. Get Pseudocode

   - if the index is less than 0 or greater than the length, return null
   - if the index is less than or equal to half of the length of the list - loop through the list starting from the head and loop towards the middle - return the node once it is found
     if the index is greater than half the length of the list - loop through the list starting from the tail and loop towards the middle - return the node once it is found

6. Set Pseudocode

   - Create a variable which is the result of the get method at the index passed to the function
     - if the get returns a valid node, set the value of the node to be the value passed to the function
     - return true
     - otherwise, return false

7. Insert Pseudocode

   - if the index is less than zero or greater than the length return false
   - if the index is 0, unshift
   - of the index is the same as the length, push
   - use the get method to access the index -1
   - set the next and prev properties on the current nodes to link everything together
   - increament the length
   - return true

8. Remove Pseudocode
   - if the index is lesss than zero or greater than or equal to the length return false
   - if the index is 0, shift
   - if the index is the same as the length - 1, pop
   - Use the get method to retrive the item to be removed
   - Update the next and prev properties to remove the found node from the list
   - set next and prev to null on the found node
   - Decrement the length
