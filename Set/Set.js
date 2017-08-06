function Set() {
  let items = {};

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }

    return false;
  };

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }

    return false;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.values = function() {
    let values = [];
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  };

  // A v B (A or B)
  this.union = function(otherSet) {
    let unionSet = new Set();

    // get values from first set and add them to union
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    // get values from second set and add them as well
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  // A ^ B (A and B)
  this.intersection = function(otherSet) {
    let intersectionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  // A - B (in A not in B)
  this.difference = function(otherSet) {
    let differenceSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };

  // A is included in B
  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }

    return true;
  };
}

let setA = new Set();
let setB = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setB.add(2);
setB.add(3);
setB.add(4);
let setC = new Set();
setC.add(2);
setC.add(3);
let unionSet = setA.union(setB);
let intersectionSet = setA.intersection(setB);
let differenceAB = setA.difference(setB);
// console.log(unionSet.values()); // 1, 2, 3, 4
// console.log(intersectionSet.values()); // 2, 3
// console.log(differenceAB.values()); // 1
// console.log(setB.subset(setA)); // false
console.log(setC.subset(setA)); // true
