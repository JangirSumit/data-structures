function List(params) {
  this.root = null;
}

List.prototype.addValue = function(value) {
  let node = new Node(value);

  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
};

List.prototype.traverse = function(params) {
  this.root.traverse();
};

function Node(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.addNode = function(node) {
  if (this.next != null) {
    this.next.addNode(node);
  } else if (this.next == null) {
    this.next = node;
  }
};

Node.prototype.traverse = function() {
  ele += `[${this.value}] -> `;
  if (this.next != null) {
    this.next.traverse();
  } else {
    console.log(ele);
  }
};
var ele = "";
var list = new List();

list.addValue(4);
list.addValue(1);
list.addValue(0);
list.addValue(7);
list.traverse();
