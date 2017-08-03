function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };
  let length = 0;
  let head = null;
  let tail = null;

  this.append = function(element) {
    let node = new Node(element);
    let current = null;

    if (head === null) { // first and last node on list
      head = node;
      tail = node;
    } else {
      current = head;
      // attach to the tail node
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    
    length++;
  };

  this.insert = function(position, element) {
    // check for out-of-bounds
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous = null;
      let index = 0;

      if (position === 0) { // add first position
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = head;
          current.prev = node;
          head = node;
        }
      } else if (position === length) { // last item
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        node.prev = previous;
        previous.next = node;
        current.prev = node;
      }
      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    // check out-of-bounds value
    if (position > -1 && position < length) {
      let current = head;
      let previous = null;
      let index = 0;

      if (position === 0) { // removing first element
        head = current.next;
        if (length === 1) {
          tail = null;
        } else {
          current.next.prev = null;
        }
      } else if (position === length - 1) { // last element
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.indexAt = function(element) {
    let current = head;
    let index = -1;

    // check first item
    if (element === current.element) {
      return 0;
    }

    index++;

    // check in the middle of the list
    while (current.next) {
      if (element === current.element) {
        return index;
      }
      
      current = current.next;
      index++;
    }

    // check last item
    if (element === current.element) {
      return index;
    }

    return -1;
  };

  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.toString = function() {
    let current = head;
    let s = current ? current.element : '';
    
    while (current && current.next) {
      current = current.next;
      s += ' <--> ' + current.element;
    }

    return s;
  };

  this.inverseToString = function () {
    let current = tail;
    let s = current ? current.element : '';

    while (current && current.prev) {
      current = current.prev;
      s += ' <--> ' + current.element;
    }

    return s;
  };

  this.print = function() {
    console.log(this.toString());
  };

  this.printInverse = function() {
    console.log(this.inverseToString());
  };

  this.getHead = function() {
    return head;
  };

  this.getTail = function() {
    return tail;
  };
}

// tests
let list = new DoublyLinkedList();

list.append(15);
list.print();

list.append(16);
list.print();

list.append(17);
list.print();

list.insert(0,13);
list.print();

list.insert(4,18);
list.print();

list.insert(1,14);
list.print();