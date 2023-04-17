const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor () {
		this.treeRoot = null;
	}
	
  root() {
		if (!this.treeRoot) {
			return null;
		} else return this.treeRoot;
  }

  add(data) {
		this.treeRoot = addWithin(this.treeRoot, data);

		function addWithin(node, data) {
			if (!node) {
				return new Node(data);
			}	if (node.data === data) {
				return node;
			}	if (data < node.data) {
				node.left = addWithin(node.left, data);
			} else {
				node.right = addWithin(node.right, data);
			}
			return node;
		}
  }

  has(data) {
		return searchWithin(this.treeRoot, data);

		function searchWithin(node, data) {
			if (!node) {
				return false;
			}	if (node.data === data) {
				return true;
			}
			return data < node.data ?
				searchWithin(node.left, data) :
				searchWithin(node.right, data);
		}
  }

  find(data) {
		return findNode(this.treeRoot, data);

		function findNode(node, data) {
			if (!node) {
				return null;
			} if (data === node.data) {
				return node;
			}	if (data < node.data) {
				return findNode(node.left, data)
			} if (data > node.data) {
				return findNode(node.right, data)
			}
  	}
	}

  remove(data) {
		this.treeRoot = removeNode(this.treeRoot, data);

		function removeNode(node, data) {
			if (!node) {
				return null;
			}	if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				} if (!node.left) {
					node = node.right;
					return node;
				} if (!node.right) {
					node = node.left;
					return node;
				}
				let maxFromLeft = node.left;
				while (maxFromLeft.right) {
					maxFromLeft = maxFromLeft.right;
				}
				node.data = maxFromLeft.data;
				node.left = removeNode(node.left, maxFromLeft.data);
				return node;
			}
		}
  }
	
  min() {
		if (!this.treeRoot) {
			return;
		}
		let node = this.treeRoot;
		while (node.left) {
			node = node.left;
		}
		return node.data;
  }

  max() {
		if (!this.treeRoot) {
			return;
		}
		let node = this.treeRoot;
		while (node.right) {
			node = node.right;
		}
		return node.data;
  }
}

module.exports = {
  BinarySearchTree
};