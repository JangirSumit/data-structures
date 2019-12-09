function PriorityQueue(){
    this.pqueue = [];
}

PriorityQueue.prototype.enqueue = function(item, priority=0){
    if (!priority || !this.pqueue.length) {
        this.pqueue.push({
                item, 
                priority
            });
    }else{
        let index = this.pqueue.findIndex((a)=>a.priority>=item);
        this.pqueue = [...this.pqueue.slice(0,index), {item, priority},...this.pqueue.slice(index)]
    }
}

PriorityQueue.prototype.dequeue = function(){
    this.pqueue.shift();
}

PriorityQueue.prototype.first = function(){
    return this.pqueue[0].item;
}

PriorityQueue.prototype.print = function(){
    console.log(this.pqueue.map((a)=>a.item).join(" "));
}

let pqueue = new PriorityQueue();
pqueue.enqueue(3,23);
pqueue.enqueue(1);
pqueue.enqueue(5,54);
pqueue.enqueue(4,1);
pqueue.first();
pqueue.print();
pqueue.dequeue();
pqueue.print();