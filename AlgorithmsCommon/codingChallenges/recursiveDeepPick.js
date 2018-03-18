// --- Directions
// Create a function that uses recursion to access deeply nested properties
// of an object

// Example
// deepPick('type', peter); // 'person'
// deepPick('data.info.fullname.first', peter); // 'Peter'

const peter = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Peter',
        last: 'Pan'
      }
    }
  }
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.');

  return (remaining.length)
  ? deepPick(remaining.join('.'), object[first])
  : object[first]
};

console.log(deepPick('type', peter)); // 'person'
console.log(deepPick('data.info.fullname.first', peter)); // 'Peter'