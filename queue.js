/* 
  Queue Implementation
    - Print
    - Enqueue
    - Dequeue
    - Front Element
    - Size
    - is Empty
*/

const QUEUE = function() {
  const collection = [];

  this.print = function() {
    return collection;
  };

  this.enqueue = function(val) {
    collection.push(val);
  };

  this.dequeue = function() {
    return collection.shift();
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
};

const queue = new QUEUE();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
queue.dequeue();
console.log(queue.print());
console.log(queue.isEmpty());
console.log(queue.size());
