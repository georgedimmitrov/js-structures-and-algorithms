// Hash Table implemented with Linear Probing technique
// Linear probing - if position index is already occupied, try index + 1 and so on..

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

function HashTableLinearProbing() {
  let table = [];

  this.put = function(key, value) {
    let position = loseloseHashCode(key);
    if (table[position] === undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
      while (table[index] !== undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };

  this.get = function(key) {
    let position = loseloseHashCode(key);
    
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        let index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }

        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }

    return undefined;
  };

  this.remove = function(key) {
    let position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
      } else {
        let index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }

        if (table[index].key === key) {
          table[index] = undefined;
        }
      }
    }

    return false;
  };

  this.print = function() {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(`${i} -> ${table[i].toString()}`);
      }
    }
  };
}


// let hash = new HashTable();
// hash.put('Gandalf', 'gandalf@mail.com');
// hash.put('John', 'john@mail.com');
// hash.put('Tyrion', 'tyrion@mail.com');
// hash.put('Aaron', 'aaron@mail.com');
// hash.put('Jamie', 'jamie@mail.com');
// hash.put('Sue', 'sue@mail.com');
// // console.log(hash.get('Gandalf'));
// // console.log(hash.get('Loiane'));
// hash.remove('Gandalf');
// // console.log(hash.get('Gandalf'));



// hash.print();


var hashLinearProbing = new HashTableLinearProbing();

hashLinearProbing.put('Gandalf', 'gandalf@email.com');
hashLinearProbing.put('John', 'johnsnow@email.com');
hashLinearProbing.put('Tyrion', 'tyrion@email.com');
hashLinearProbing.put('Aaron', 'aaron@email.com');
hashLinearProbing.put('Donnie', 'donnie@email.com');
hashLinearProbing.put('Ana', 'ana@email.com');
hashLinearProbing.put('Jonathan', 'jonathan@email.com');
hashLinearProbing.put('Jamie', 'jamie@email.com');
hashLinearProbing.put('Sue', 'sue@email.com');
hashLinearProbing.put('Mindy', 'mindy@email.com');
hashLinearProbing.put('Paul', 'paul@email.com');
hashLinearProbing.put('Nathan', 'nathan@email.com');

console.log('**** Printing Hash **** ');

hashLinearProbing.print();

console.log('**** Get **** ');

console.log(hashLinearProbing.get('Nathan'));
console.log(hashLinearProbing.get('Loiane'));

console.log('**** Remove **** ');

hashLinearProbing.remove('Gandalf');
console.log(hashLinearProbing.get('Gandalf'));
hashLinearProbing.print();