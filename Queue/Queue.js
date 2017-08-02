let Queue = (function() {
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }
    
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }

    front() {
      let q = items.get(this);
      return q[0];
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    size() {
      let q = items.get(this);
      return q.length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      console.log(this.toString());
    }
    
    toString() {
      return items.get(this).toString();
    }
  }

  return Queue;
})();

// circular queue - hot potato game - children pass potato around
function hotPotato(nameList, num) {
  let queue = new Queue();
  
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated} was eliminated from the game`);
  }

  console.log(`winner is ${queue.front()}`);
  return queue.dequeue();
}

hotPotato(['pesho', 'miro', 'gosho'], 2);