# Max Binary Heap

**Binary Heap**

> Very Similar to a binary search tree, but with different rules!
> In a Max Binary Heap. parent node are always larger than child nodes, In a Min Binary Heap, parent nodes are always smaller than child nodes.

**Max Binary Heap Rules**

- Each parent has at most two child nodes.
- The value of each parent node is always greater than its child nodes.
- In a max binary heap the parent is greater than the children, but there are no gaurentees between siblings nodes.
- A binary heap is as complete as possible. All the children of each node are as full as they can be and left children are filled out first.
- No Implied ordering between siblings.

**Mathematical Relation Between Child and Parent**
1. PushingTo Find child 
- 2n+1 - 2n+2
2. To Find parent
- (n-1)/2 - floored

1.Insert Pseudocode
- Push the value into the values property on the heap
- Bubble up :
- Create a variable called index which is the length of the values property -1
- Create a variable called parentIndex which is the floor of (index - 1 ) / 2
- keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!

2.Extract MAX
- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...
    - Your parent index starts at 0(the root)
    - Find the index of the left child: 2 \* index + 1 (make sure its not out of bounds)
    - Find the index of the right child: 2 \* index + 2 (make sure it not out of bounds)
    - if the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
    - The child index you swapped to new becomes the new parent index.
    - Keep looping and swapping until newither child is larger than the element.
    - Return the old root!
