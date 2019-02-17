const reverse = require('./reverseLinkedListOofOne');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');

let newHead = reverse(l.head);

console.log(newHead);