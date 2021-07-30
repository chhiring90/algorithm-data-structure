# Priority Queue

**Insert Pseudocode**
- Push the value into the values property on the heap.
- Bubble up: 
    - Create a variable called index which is the length of the values property -1
    - Create a variable called parentIndex which is the floor of (index - 1) / 2
    - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        - Swap the value of the values element at the parentIndex with the value of element property at the child index
        - set the index to be the parentIndex, and start over!

**Extract Max**
- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...
    - Your parent index starts at 0(the root)
    - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
    - The child index you swapped to new becomes the new parent index.
    - Keep looping and swapping until newer child is larger than the element.
    - Return the old root!