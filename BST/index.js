function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function(value) {
  let node = new Node(value);
  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
};

Tree.prototype.traverse = function() {
  this.root.visit();
};

Tree.prototype.search = function(value) {
  this.root.search(value);
};

function Node(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

Node.prototype.addNode = function(node) {
  if (node.value < this.value) {
    if (this.left == null) {
      this.left = node;
    } else {
      this.left.addNode(node);
    }
  } else if (node.value > this.value) {
    if (this.right == null) {
      this.right = node;
    } else {
      this.right.addNode(node);
    }
  }
};

Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right != null) {
    this.right.visit();
  }
};

Node.prototype.search = function(value) {
  if (this.value == value) {
    console.log("Found");
    return;
  }
  if (this.value > value && this.left != null) {
    this.left.search(value);
  } else if (this.value < value && this.right != null) {
    this.right.search(value);
  } else {
    console.log("Not Found");
  }
};

var tree;

tree = new Tree();
tree.addValue(5);
tree.addValue(3);
tree.addValue(10);
tree.addValue(2);
tree.addValue(1);

tree.traverse();
tree.search(6);
