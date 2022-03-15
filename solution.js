/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

example:    _6
          5      ----> 5->4, 5->6, 5->4->2
           --4
              --2
*/

// node
function Node(val){
  this.value = val 
  this.left = null
  this.right = null
}
// binary tree
function BTree(){
  this.rootNode = null
  this.addNode = function(val) {
    if (!this.rootNode) {
      this.rootNode = new Node(val)
    }else{
      // left
      if (this.rootNode.value>val) {
        if (!this.rootNode.left) {
          this.rootNode.left = new Node(val)
        }else{
          this.addNode(this.rootNode.left)
        }
      }
      // right
      else {
        if (!this.rootNode.right) {
          this.rootNode.right = new Node(val)
        }else{
          this.addNode(this.rootNode.right)
        }
      }
    }
  }
}

// tree setup
const binaryTree = new BTree()
binaryTree.addNode(5)
binaryTree.addNode(4)
binaryTree.addNode(6)

const res = []
// get paths from root to leaf
function rootToLeafPath(current, val){
  
    if (!current.left && !current.right) {
        return res.push(val);
    };
    if (current.left) {
      rootToLeafPath(current.left, `${val}->${current.left.value}`)
    };
    if (current.right) {
      rootToLeafPath(current.right, `${val}->${current.right.value}`)
    };
  
  return res
}

// driver code
console.log(rootToLeafPath(binaryTree.rootNode, binaryTree.rootNode.value))
