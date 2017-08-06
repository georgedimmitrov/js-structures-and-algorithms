function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element) {
    let node = new Node(element);
    let current = null;

    if (head === null) {
      head = node;
    } else {
      current = head;
      // loop the list until find last item
      while (current.next) {
        current = current.next;
      }

      // get last item and assign next to node to make the link
      current.next = node;
    }

    length++; // update size of the list
  };

  this.insert = function(position, element) {
    // does not work for out-of-bounds values!
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous = null;
      let index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    // does not work for out-of-bounds values!
    if (position > -1 && position < length) {
      let current = head;
      let previous = null;
      let index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // link previous with current's next: skip it to remove
        previous.next = current.next;
      }
      length--;

      return current.element;
    } else {
      return null;
    }
  };
  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function(element) {
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return index;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };

  this.toString = function() {
    let current = head;
    let string = '';

    while (current) {
      string += current.element + (current.next ? ' -> ': '');
      current = current.next;
    }

    return string;
  };
  this.print = function() {};
}

// let list = new LinkedList();
// list.append(5);
// list.append(10);
// list.insert(0, 55);
// list.removeAt(2);
// console.log(list.toString());
// console.log(list.size());

module.exports = LinkedList;