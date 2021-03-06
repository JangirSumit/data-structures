function List(params) {
  this.root = null;
}

List.prototype.addValueAtLast = function (value) {
  let node = new Node(value);

  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNodeAtLast(node);
  }
};

List.prototype.addValueAtFirst = function (value) {
  let node = new Node(value);

  if (this.root == null) {
    this.root = node;
  } else {
    node.next = this.root;
    this.root = node;
  }
};

List.prototype.addValueAtPosition = function (value, pos) {
  let node = new Node(value);

  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNodeAtPosition(node, pos);
  }
};

List.prototype.traverse = function () {
  this.root.traverse();
};

List.prototype.hasLoop = function () {
  let p1, p2;

  p1 = this.root;
  p2 = this.root;
  let hasLoop = false;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      hasLoop = true;
      break;
    }
  }

  return hasLoop;
};

function Node(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.addNodeAtLast = function (node) {
  if (this.next != null) {
    this.next.addNodeAtLast(node);
  } else if (this.next == null) {
    this.next = node;
  }
};

Node.prototype.traverse = function () {
  ele += `[${this.value}] -> `;
  if (this.next != null) {
    this.next.traverse();
  } else {
    console.log(ele + "[NULL]");
  }
};

Node.prototype.addNodeAtPosition = function (node, pos) {
  var current = this;
  for (let index = 1; index < pos - 1; index++) {
    if (current && current.next != null) {
      current = current.next;
    }
  }

  node.next = current.next;
  current.next = node;
};

var ele = "";
var list = new List();

list.addValueAtLast(4);
list.addValueAtLast(1);
list.addValueAtFirst(10);
list.addValueAtLast(0);
list.addValueAtLast(7);
list.addValueAtFirst(20);
list.addValueAtPosition(30, 3);
list.addValueAtPosition(40, 10);

console.log(JSON.stringify(list));

//list.root.next.next.next.next = list.root.next.next;

console.log(`${list.hasLoop()}`);

//list.traverse();
