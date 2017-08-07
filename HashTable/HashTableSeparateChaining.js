// Hash Table implemented with Separate chaining technique
// Separate chaining - create a linked list for every hash value

const LinkedList = require('../LinkedLists/LinkedList');

let loseloseHashCode = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % 37;
};


// Simple method to store a key and a value in an Object instance
let ValuePair = function(key, value) {
  this.key = key;
  this.value = value;
  this.toString = function() {
    return `[${this.key} - ${this.value}]`;
  };
};

function HashTable() {
  let table = [];

  this.put = function(key, value) {
    let position = loseloseHashCode(key);
    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  this.get = function(key) {
    let position = loseloseHashCode(key);
    
    if (table[position] !== undefined) {
      // iterate linked list to find key/value
      let current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      
      // check in case first or last element
      if (current.element.key === key) {
        return current.element.value;
      }
    }

    return undefined;
  };

  this.remove = function(key) {
    let position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      let current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      // check in case first or last element
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }

    return false;
  };

  this.print = function() {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(`${i}: ${table[i]}`);
      }
    }
  };
}


let hash = new HashTable();
hash.put('Gandalf', 'gandalf@mail.com');
hash.put('John', 'john@mail.com');
hash.put('Tyrion', 'tyrion@mail.com');
hash.put('Aaron', 'aaron@mail.com');
hash.put('Jamie', 'jamie@mail.com');
hash.put('Sue', 'sue@mail.com');
// console.log(hash.get('Gandalf'));
// console.log(hash.get('Loiane'));
hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));


hash.print();