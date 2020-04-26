/*
    BST Impletantion
    - Add
    - Find Min
    - Find Max
    - Find Any
    - IsPresent
    - Remove data
    - Find Min Height 
    - Find Max Height 
    - is Balanced Tree
    - Tree Traversal (InOrder, PreOrder, PostOrder, LevelOrder)
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Add Node
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.data !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.data !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  // Find Min Node
  findMin() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  // Find Max Node
  findMax() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

  // Find Node
  find(data) {
    let node = this.root;
    while (node.data !== data) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      }
      if (data === null) {
        return null;
      }
    }
    return node;
  }

  // is Present Node
  isPresent(data) {
    let node = this.root;
    while (node) {
      if (data === node.data) {
        return true;
      }
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      }
    }
    return false;
  }

  // Remove Node
  remove(data) {
    let removeNode = function(node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }

  // Find Min Height of Tree
  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  // Find Max Height of Tree
  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  // is Balanced Tree
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  // InOrder Traversal
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      function traversalInOrder(node) {
        node.left && traversalInOrder(node.left);
        result.push(node.data);
        node.right && traversalInOrder(node.right);
      }
      traversalInOrder(this.root);
      return result;
    }
  }

  // preOrder Traversal
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      function traversalPreOrder(node) {
        result.push(node.data);
        node.left && traversalPreOrder(node.left);
        node.right && traversalPreOrder(node.right);
      }
      traversalPreOrder(this.root);
      return result;
    }
  }

  // postOrder Traversal
  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      function traversalPostOrder(node) {
        node.left && traversalPostOrder(node.left);
        node.right && traversalPostOrder(node.right);
        result.push(node.data);
      }
      traversalPostOrder(this.root);
      return result;
    }
  }

  // levelOrder Traversal
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();
bst.add(6);
bst.add(4);
bst.add(3);
bst.add(5);
bst.add(1);
bst.add(7);
bst.add(9);
bst.add(8);
// bst.remove(6);

// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.find(4));
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());
