/* 
  Set Implementation
    - Has
    - Size
    - Add
    - Remove
    - values
    - Union
    - Intersection
    - Difference
    - Subset
*/

const SET = function() {
  let collections = [];

  // Check if element is present or not
  this.has = function(val) {
    return collections.indexOf(val) !== -1;
  };

  // Return all values
  this.values = function() {
    return collections;
  };

  // Add element in Set
  this.add = function(val) {
    if (!this.has(val)) {
      collections.push(val);
      return true;
    }
    return false;
  };

  // Remove element in Set
  this.remove = function(val) {
    if (this.has(val)) {
      const index = collections.indexOf(val);
      collections.splice(index, 1);
      return true;
    }
    return false;
  };

  // Size of Set
  this.size = function() {
    return collections.length;
  };

  // Union of 2 Set
  this.union = function(otherSet) {
    const unionSet = new SET();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    for (let i = 0; i < firstSet.length; i++) {
      unionSet.add(firstSet[i]);
    }
    for (let i = 0; i < secondSet.length; i++) {
      unionSet.add(secondSet[i]);
    }
    return unionSet;
  };

  // Intersection of 2 Set
  this.intersection = function(otherSet) {
    const intersectionSet = new SET();
    const firstSet = this.values();
    for (let i = 0; i < firstSet.length; i++) {
      if (otherSet.has(firstSet[i])) {
        intersectionSet.add(firstSet[i]);
      }
    }
    return intersectionSet;
  };

  // Difference of 2 Set
  this.difference = function(otherSet) {
    const differenceSet = new SET();
    const firstSet = this.values();
    for (let i = 0; i < firstSet.length; i++) {
      if (!otherSet.has(firstSet[i])) {
        differenceSet.add(firstSet[i]);
      }
    }
    return differenceSet;
  };

  // Subset of 2 Set
  this.subset = function(otherSet) {
    const firstSet = this.values();
    for (let i = 0; i < firstSet.length; i++) {
      if (!otherSet.has(firstSet[i])) {
        return false;
      }
    }
    return true;
  };
};

const setA = new SET();
const setB = new SET();

setA.add(1);
setA.add(2);
setB.add(1);
setB.add(3);
setB.add(4);
setB.remove(4);
console.log(setA.values());
console.log(setB.values());
console.log(setB.size());
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.subset(setB));
