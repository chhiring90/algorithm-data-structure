# Graphs

**Graphs**

> A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

**Graph Terms**
1. Vertex - a node
2. Edge - connection between nodes
3. Weighted/Unweighted - values assigned to distances between vertices
4. Directed/Undirected - directions assigned to distanced between vertices

**Adding a Vertex**
- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

**Adding an Edge**
- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

**Removing a Vertex**
- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
- delete the key in the adjacency list for that vertex

**Removing an Edge**
- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

**DFS Pseudocode**
###### Recursive

- DFS(vertex):
  - if vertex is empty
    - return (this is base case)
  - add vertex to results list
  - mark vertex as visited
  - for each neighbor in vertex's neighbors:
    - if neighbor is not visited:
      - recursively call DFS on neighbor

* The function should accept a starting node
* Create a list to store the end result, to be returned at the very end
* Create an object to store visited vertices
* Create a helper function which accepts a vertex
  -The helper function should return early if the vertex is empty
  -The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
  - Loop over all of the values in the adjacencyList for that vertex
  - If any of those values have not been visited, recursively invoke the helper function with that vertex
* Invoke the helper function with the starting vertex
* Return the result array

###### Iteratively

- DFS-iterative(start):
  - let S be a stack
  - S.push(start)
  - while S is not empty
    - vertex = S.pop()
    - if vertex is not labeled as discovered:
      - visit vertex (add to result list)
      - label vertex as discovered
      - for each of vertex's neighbors, N do
        - S.push(N)

* The function should accept a starting node
* Create a stack to help use keep track of vertices (use a list/array)
* Create a list to store the end result, to be returned at the very end
* Create an object to store visited vertices
* Add the starting vertex to the stack, and mark it visited
* While the stack has something in it:
  - Pop the next vertex from the stack
  - If that vertex hasn't been visited yet:
    ​ - Mark it as visited
    - Add it to the result list
    - Push all of its neighbors into the stack
* Return the result array

**BREADTH FIRST Pseudocode**
- This function should accept a starting vertex
- Create a queue (you can use an array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertex from the queue and push it into the array that stores nodes visited
- Loop over each vertex in the adjacency list for the vertex you are visiting.
- If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
- Once you have finished looping, return the array of visited nodes
