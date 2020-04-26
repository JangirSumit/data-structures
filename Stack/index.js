function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (item) {
  this.stack.push(item);
};

Stack.prototype.pop = function () {
  this.stack.pop();
};

Stack.prototype.top = function () {
  return this.stack[0];
};

Stack.prototype.print = function () {
  console.log(this.stack.join(" "));
};

let stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(5);
stack.push(4);
stack.top();
stack.print();
stack.pop();
stack.print();
