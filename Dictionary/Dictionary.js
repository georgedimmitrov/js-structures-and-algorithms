function Dictionary() {
  let items = {};

  this.has = function(key) {
    return key in items;
  };

  this.set = function(key, value) {
    items[key] = value;
  };

  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }

    return false;
  };

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function() {
    let values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }

    return values;
  };

  this.clear = function() {
    items = {};
  };


  this.keys = function() {
    return Object.keys(items);
  };
  
  this.size = function() {
    return this.keys().length;
  };

  this.getItems = function() {
    return items;
  };
}

// let dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@mail.com');
// dictionary.set('John', 'john@mail.com');
// dictionary.set('Tyrion', 'tyrion@mail.com');
// console.log(dictionary.has('Gandalf')); // true
// console.log(dictionary.size()); // 3
// console.log(dictionary.keys()); // ['Gandalf', 'John', 'Tyrion']
// console.log(dictionary.getItems()); // Object {Gandalf: 'gandalf@mail.com', ... }
// dictionary.delete('John');
// console.log(dictionary.getItems());

module.exports = Dictionary;