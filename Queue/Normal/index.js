function Queue(){
    this.queue = [];
}

Queue.prototype.enqueue = function(item){
    this.queue.push(item);
}

Queue.prototype.dequeue = function(){
    this.queue.shift();
}

Queue.prototype.first = function(){
    return this.queue[0];
}

Queue.prototype.print = function(){
    console.log(this.queue.join(" "));
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(4);
queue.first();
queue.print();
queue.dequeue();
queue.print();