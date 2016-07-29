function map(collection, callback){
  const result = []

  for (let i = 0 ; i < collection.length ; i++){
    const element = collection[i]; // prints each represented item in the array during the corresponding iteration (loop)
    result.push(callback(element, i, collection)); // 'i' refers to the index, 'collection' refers to the entire collection
  }                                               // alsoooo need to push result into a new array
  return result;
}

const numbers = [1, 2, 3];
const dobutlNumbers = map(numbers, function (number){
  return number * 2;
});
console.log(doubleNumbers;) // prints [2, 4, 6]


//-----??-----
// 1. why do you need collection to be passed as an argument?
  // if you can just call 'result' for the entire array


//---------------------------------------------------------------------------
const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobotsWithMap);
/*
 Result:
 [
   { name: 'Optimus Prime', strength: 10, isTransformed: true },
   { name: 'Ironhide', strength: 6, isTransformed: true },
   { name: 'Bumblebee', strength: 5, isTransformed: true },
   { name: 'Ratchet', strength: 3, isTransformed: true }
 ]
*/
