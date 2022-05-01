const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.mainRoot = null;
  }

  root() {
    let mainRoot = this.mainRoot
    return mainRoot
  }
  
  add(data) {
    const newNode = new Node(data);
    if (!this.mainRoot) {
      this.mainRoot = newNode;
    } else {
      this.addNode(this.mainRoot, newNode);
    }
  }    

	addNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.addNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.addNode(node.right, newNode);
			}
		}
	}

  find(value) {
    if (!this.mainRoot) return null;
    let current = this.mainRoot;
    let found = false;
    while(current && !found) {
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return null;
    return current;
  }

  has(value, node = this.mainRoot) {
    if(node === null){
     return false;
    }
    if(value < node.data) {
      return this.has(value, node.left);
    } else if(value > node.data) {
      return this.has(value, node.right);
    } else {
      return true;
    }
  }

  remove(data, node = this.mainRoot) {
    if (!this.has(data)) return;
    if (!node) {
        return null;
    }

    if (data < node.data) {
        node.left = this.remove(data, node.left);
    } else if (data > node.data) {
        node.right = this.remove(data, node.right);
    } else {
        if (!node.left) {
            return node.right;
        } else if (!node.right) {
            return node.left;
        } else {
            node.data = this.min(node.right);
            node.right = this.remove(node.data, node.right);
        }
    }
    return node;
  }

  min(node = this.mainRoot) {
		if (node === null) {
			return null;
		} else if (node.left === null) {
			return node.data;
		} else {
			return this.min(node.left);
		}
	}

  max(node = this.mainRoot) {
    if (node === null) { 
      return null;
    } else if (node.right === null) {
      return node.data;
    } else {
      return this.max(node.right);
    }  
  }
}

module.exports = {
  BinarySearchTree
};