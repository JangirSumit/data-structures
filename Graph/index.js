function Graph() {
  this.adjList = new Map();
}

Graph.prototype.addVertex = function(vertex) {
  if (!this.adjList.has(vertex)) {
    this.adjList.set(vertex, []);
  }
};

Graph.prototype.addEdge = function(vertex, node) {
  if (this.adjList.has(vertex)) {
    this.adjList.get(vertex).push(node);
  }
};

Graph.prototype.print = function() {
  for (let [key, value] of this.adjList) {
    console.log(key, value);
  }
};

let g = new Graph();
let arr = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < arr.length; i++) {
  g.addVertex(arr[i]);
}
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");
g.print();
/* PRINTED */
// A [ 'B', 'D', 'E' ]
// B [ 'C' ]
// C [ 'F' ]
// D [ 'E' ]
// E [ 'F', 'C' ]
// F []
