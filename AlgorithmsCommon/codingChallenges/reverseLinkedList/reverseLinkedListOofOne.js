// Step 1:
// Knowing what to assign the variables to initially.

// Step 2:
// Knowing when to end this process of reassignments.
// Making sure the order of operations is correct so we don’t lose track of any nodes.

// Step 3:
// Returning the correct value.

// function reverse(head) {
//     // Step 1
//     let previous = null;
//     let current = head;
//     let following = head;

//     // Step 2
//     while (current !== null) {
//         following = following.next;
//         current.next = previous;
//         previous = current;
//         current = following;
//     }

//     // Step 3
//     return previous;
// }

function reverse(head) {
    // Step 1
      let previous = null
      let current = head
      let following = head
    // Step 2
      while(current !== null) {
        following = following.next
        current.next = previous
        previous = current          
        current = following
      }
    // Step 3  
      return previous
    }

module.exports = reverse;