# HatchDev Training - Data Structures and Algorithms

Welcome to the HatchDev Training repository! This project contains implementations of various data structures and algorithms in TypeScript, organized by weekly modules.

## 📚 Project Structure

```
├── Week_2_Intro_to_OOP_and_DataStructure/
│   ├── 16-5-25/                    # Introduction to OOP concepts
│   ├── 17-5-25/                    # Basic data structures
│   └── Assignment/
│       ├── Library_Management_System/
│       └── Task_Manager/
├── Week_3_OOP_and_DataStructure_Continued/
│   ├── 23-5-25/
│   ├── 24-5-25/
│   └── Assignment_1/
├── Week_4_Introduction_to_DS/
│   └── Assignment/
│       └── circularSinglyLinkList.ts
├── Week_5_DSA_Continued/
│   ├── 20-6-25/
│   ├── 21-6-25/                   # Stack and Queue implementations
│   └── assignment/
│       ├── doubleLinkedList.ts
│       ├── doubleircularlinkedlist.ts
│       ├── doublelinkedlistqueue.ts
│       └── singlecircularlinkedlist.ts
├── Week_6_DSA_Continued/
│   ├── 27-6-25/                   # HashMap implementation
│   ├── 28-6-25/                   # Binary trees, recursion, fibonacci
│   │   ├── binarytree.ts          # Binary tree traversals
│   │   ├── binartseachetree.ts    # Binary search tree
│   │   ├── recursive.ts           # Recursive algorithms
│   │   └── fibonaci.ts            # Fibonacci implementations
│   └── assignment/
│       └── hashmap.ts             # Simple hash map without collision handling
├── Week_7_DSA_Continued/
│   ├── 4-7-25/                    # Advanced hash map implementations
│   ├── 5-7-25/                    # Binary tree algorithms
│   │   ├── balanceBinaryTree.ts   # Balanced binary tree
│   │   ├── invertbinarytree.ts    # Invert binary tree algorithm
│   │   └── maximumdepthBinaryTree.ts # Maximum depth calculation
│   └── assignment_1/
│       ├── diameterOfBinaryTree.ts # Diameter calculation
│       └── sametree100.ts         # Same tree comparison
├── Week_8_DSA_Continued/
│   ├── 7-11-25/                   # String algorithms and problem solving
│   │   ├── groupAnagrams.ts       # Group anagrams algorithm
│   │   ├── isomorphicString.ts    # Isomorphic string detection
│   │   ├── missingNumber.ts       # Missing number finder
│   │   └── sumOfNumbers.ts        # Sum algorithms
│   ├── groupAnagrams.ts           # Anagram grouping implementation
│   └── sumOfNumbers.ts            # Number sum calculations
└── Week_9_DSA_Continued/
    └── 18-7-25/                   # Sorting algorithms
        ├── bubblesort.ts          # Bubble sort with optimization
        ├── findminandmax.ts       # Min/Max finder algorithm
        └── selectionsort.ts       # Selection sort implementation
```

## 🎯 Learning Objectives

- **Object-Oriented Programming (OOP)** fundamentals in TypeScript
- **Data Structure** implementations from scratch
- **Algorithm** design and analysis
- **Problem-solving** skills development

## 🛠️ Technologies Used

- **TypeScript** - Primary programming language
- **Deno** - Runtime environment for TypeScript execution
- **Node.js** - Alternative runtime for some modules
- **Git** - Version control

## 📋 Implemented Data Structures

### Week 4-5: Linked Lists
- ✅ Singly Linked List
- ✅ Doubly Linked List
- ✅ Circular Singly Linked List
- ✅ Double Circular Linked List

### Week 5: Stacks and Queues
- ✅ Stack (Array-based)
- ✅ Stack (Linked List-based)
- ✅ Queue (Linked List-based)
- ✅ Queue (Double Linked List-based)

### Week 6: Hash Tables and Trees
- ✅ HashMap with collision handling
- ✅ Simple HashMap without collision handling
- ✅ Binary Tree with traversals (Inorder, Preorder, Postorder)
- ✅ Binary Search Tree (BST) implementation
- ✅ Recursive algorithms
- ✅ Fibonacci sequence implementations

### Week 7: Advanced Hash Maps and Binary Trees
- ✅ Advanced hashing techniques and collision resolution
- ✅ Balanced Binary Tree implementation
- ✅ Invert Binary Tree algorithm
- ✅ Maximum Depth of Binary Tree
- ✅ Diameter of Binary Tree calculation
- ✅ Same Tree comparison algorithm

### Week 8: String Algorithms and Problem Solving
- ✅ Group Anagrams algorithm
- ✅ Isomorphic String detection
- ✅ Missing Number finder
- ✅ Sum of Numbers calculations
- ✅ Advanced string manipulation techniques

### Week 9: Sorting Algorithms
- ✅ Bubble Sort with optimization
- ✅ Selection Sort implementation
- ✅ Find Min and Max algorithm (single pass)
- ✅ Comprehensive test suites for all algorithms

## 🚀 Getting Started

### Prerequisites
- [Deno](https://deno.land/) installed on your system
- [Node.js](https://nodejs.org/) (for some modules)
- Git for version control

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/codebasebo/HatchDev-Training.git
   cd HatchDev-Training
   ```

2. Navigate to any week's folder:
   ```bash
   cd Week_5_DSA_Continued/assignment
   ```

3. Run TypeScript files with Deno:
   ```bash
   deno run filename.ts
   ```

### Running Specific Implementations

#### Linked List Examples:
```bash
# Run singly circular linked list
deno run Week_5_DSA_Continued/assignment/singlecircularlinkedlist.ts

# Run double linked list queue
deno run Week_5_DSA_Continued/assignment/doublelinkedlistqueue.ts
```

#### Binary Tree Examples:
```bash
# Run binary tree traversals
deno run Week_6_DSA_Continued/28-6-25/binarytree.ts

# Run binary search tree
deno run Week_6_DSA_Continued/28-6-25/binartseachetree.ts

# Run fibonacci implementations
deno run Week_6_DSA_Continued/28-6-25/fibonaci.ts
```

#### Hash Map Examples:
```bash
# Run simple hash map (no collision handling)
deno run Week_6_DSA_Continued/assignment/hashmap.ts

# Run advanced hash map
deno run Week_6_DSA_Continued/27-6-25/hashmap.ts
```

#### Sorting Algorithm Examples:
```bash
# Run bubble sort with comprehensive tests
deno run Week_9_DSA_Continued/18-7-25/bubblesort.ts

# Run selection sort with test cases
deno run Week_9_DSA_Continued/18-7-25/selectionsort.ts

# Run find min/max algorithm
deno run Week_9_DSA_Continued/18-7-25/findminandmax.ts
```

#### Binary Tree Algorithm Examples:
```bash
# Run invert binary tree
deno run Week_7_DSA_Continued/5-7-25/invertbinarytree.ts

# Run maximum depth calculation
deno run Week_7_DSA_Continued/5-7-25/maximumdepthBinaryTree.ts

# Run balanced binary tree check
deno run Week_7_DSA_Continued/5-7-25/balanceBinaryTree.ts
```

#### String Algorithm Examples:
```bash
# Run group anagrams algorithm
deno run Week_8_DSA_Continued/7-11-25/groupAnagrams.ts

# Run isomorphic string detection
deno run Week_8_DSA_Continued/7-11-25/isomorphicString.ts

# Run missing number finder
deno run Week_8_DSA_Continued/7-11-25/missingNumber.ts
```

## 📖 Code Examples

### Binary Tree Traversals
```typescript
// Binary Tree with Inorder, Preorder, Postorder traversals
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log("Inorder:", inorderTraversal(root));    // [2, 1, 3]
console.log("Preorder:", preorderTraversal(root));  // [1, 2, 3]  
console.log("Postorder:", postorderTraversal(root)); // [2, 3, 1]
```

### Binary Search Tree
```typescript
const bst = new BST();
bst.addNode(10);
bst.addNode(5);
bst.addNode(15);
// BST maintains sorted order for efficient searching
```

### Bubble Sort with Optimization
```typescript
const bubbleSort = new BubbleArr([64, 34, 25, 12, 22, 11, 90]);
const sorted = bubbleSort.bubbleSort();
console.log("Sorted array:", sorted);
// Includes early termination for already sorted arrays
```

### Selection Sort
```typescript
const selectionSort = new selectionSort([64, 25, 12, 22, 11]);
const sorted = selectionSort.selectionSort();
console.log("Sorted array:", sorted);
// Always O(n²) time complexity, minimum swaps
```

### Find Min and Max (Single Pass)
```typescript
const minMax = new MinMax();
const result = minMax.findMinAndMax([3, 5, 1, 9, 2, 8]);
console.log(`Min: ${result.min}, Max: ${result.max}`); // Min: 1, Max: 9
```

### Group Anagrams
```typescript
const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result); // [["eat","tea","ate"],["tan","nat"],["bat"]]
```

### Invert Binary Tree
```typescript
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
const inverted = invertTree(root);
// Tree structure is mirrored
```

### Singly Circular Linked List
```typescript
let list = new singlyCircularLinkedList(10);
list.append(20);
list.append(30);
list.prepend(5);
// Result: 5 -> 10 -> 20 -> 30 -> (back to 5)
```

### Double Linked List Queue
```typescript
let queue = new doubleCircularLinkedListQueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue(); // Removes first element (FIFO)
```

## 🧪 Testing

Each implementation includes test cases demonstrating functionality. Look for console.log statements in the files to see example usage.

## 📝 Assignments

### Week 2: OOP Fundamentals
- Library Management System
- Task Manager Application

### Week 4: Basic Data Structures
- Circular Singly Linked List implementation

### Week 5: Advanced Data Structures
- Double Linked List variations
- Queue implementations using different approaches
- Stack implementations (array and linked list)

### Week 6: Hash Tables and Trees
- HashMap with collision resolution
- Simple HashMap without collision handling
- Binary Tree traversal implementations
- Binary Search Tree with insert and search operations
- Recursive algorithm implementations
- Fibonacci sequence variations

### Week 7: Advanced Data Structures and Tree Algorithms
- Balanced Binary Tree implementation
- Invert Binary Tree algorithm
- Maximum Depth of Binary Tree calculation
- Diameter of Binary Tree
- Same Tree comparison algorithm

### Week 8: String Algorithms and Problem Solving
- Group Anagrams algorithm implementation
- Isomorphic String detection
- Missing Number finder algorithm
- Sum of Numbers calculations
- Advanced string manipulation techniques

### Week 9: Sorting Algorithms
- Bubble Sort with optimization and early termination
- Selection Sort with comprehensive test cases
- Find Min and Max algorithm (single pass optimization)
- Complete test suites with edge cases and performance analysis

## 🤝 Contributing

This is a learning repository for HatchDev training. Each week's assignments and implementations are part of the structured curriculum.

## 📞 Contact

For questions or clarifications about the implementations, please reach out through the HatchDev training program.

## 📄 License

This project is part of the HatchDev training curriculum and is for educational purposes.

---

**Happy Coding! 🚀**
