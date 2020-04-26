/* 
  Stack Implementation
    - Number of Elements
    - Push / Insert
    - Pop / Delete
    - Peek / View on top of stack
*/

const STACK = function() {
  this.count = 0;
  this.storage = {};

  // Push element
  this.push = function(val) {
    this.storage[this.count++] = val;
  };

  // Pop element;
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    const deleteElement = this.storage[--this.count];
    delete this.storage[this.count];
    return deleteElement;
  };

  // Peek on top of stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };

  //Size of Stack
  this.size = function() {
    return this.count;
  };

  // Print of Stack
  this.print = function() {
    return this.storage;
  };
};

var stack = new STACK();

stack.push("First");
stack.push("Second");
stack.pop();
stack.push("Third");
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print());
