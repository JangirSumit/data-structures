function PriorityQueue(){
    this.pqueue = [];
}

PriorityQueue.prototype.enqueue = function(item, priority=0){
    if (!priority) {
        this.pqueue.push(
            {
                item, priority
            }
            );
    }else{

    }
}

PriorityQueue.prototype.dequeue = function(){
    this.pqueue.shift();
}

PriorityQueue.prototype.first = function(){
    return this.pqueue[0];
}

PriorityQueue.prototype.print = function(){
    console.log(this.pqueue.join(" "));
}

let pqueue = new PriorityQueue();
pqueue.enqueue(3);
pqueue.enqueue(1);
pqueue.enqueue(5);
pqueue.enqueue(4);
pqueue.first();
pqueue.print();
pqueue.dequeue();
pqueue.print();