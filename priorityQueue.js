/* 
  PriorityQueue Implementation
    - Print
    - Enqueue
    - Dequeue
    - Front Element
    - Size
    - is Empty
*/

const PRIORITY_QUEUE = function() {
  const collection = [];

  this.print = function() {
    return collection;
  };

  this.enqueue = function(val) {
    if (this.isEmpty()) {
      collection.push(val);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (val[1] < collection[i][1]) {
          collection.splice(i, 0, val);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(val);
      }
    }
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

const pQueue = new PRIORITY_QUEUE();

pQueue.enqueue(["Abhay", 2]);
pQueue.enqueue(["jain", 2]);
pQueue.enqueue(["I am ", 1]);
// console.log(pQueue.front());
// pQueue.dequeue();
console.log(pQueue.print());
// console.log(pQueue.isEmpty());
// console.log(pQueue.size());
