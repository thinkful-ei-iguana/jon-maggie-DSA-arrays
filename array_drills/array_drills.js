const Array = require('./Array');

function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();


  arr.remove();
  arr.remove();
  arr.remove();

  arr.push('tauhida');
  console.log(arr.get(0));
}

// main();

// 2. PUSH:
// What is the length, capacity and memory address of your array with arr.push(3)?:
// {length: 1, _capacity: 3, ptr: 0}

// What is the length, capacity and memory address of your array? Explain the result 
// of your program after adding the new lines of code.
// {length: 6, _capacity: 12, ptr: 0}
// length of the array is 6 elements long; the initial capacity of 3 was breached, and so 
// the array resized according to the array's length of 4 (the point at which the length became
// greater than the capacity) tripled. The address/pointer remains at index 0.

////////////////////////////////////

// 3. POP:
// What is the length, capacity, and address of your array? Explain the result of your program 
// after adding the new lines of code:
// {length: 3, _capacity: 12, ptr: 0}
// We have popped three elements off the end of the array, and so our length has decreased from
// 6 to 3 elements.

/////////////////////////////////////

// 4. PRINT, EMPTY, RESIZE:
// -Print first item in the array: 3
// -Empty the array and add just 1 item: arr.push("tauhida"); Print this 1 item that you just added. 
// What is the result? Can you explain your result?:
// Result is NaN; the Memory class is set up to only accept numbers (line 3 of the 
// Memory class in the Memory module)
// -_resize() is used to allow enlargening of an array (which also generally involves
// moving the actual array to a spot that has enough free space for the newly sized
// capacity); it is a private function, only able to be used by the Array class

///////////////////////////////////////

// 5. URLify a String

function urlify(string) {
  console.log(encodeURI(string));

}
// urlify('tauhida parveen');
// urlify('www.thinkful.com /tauh ida parv een');

// 6. Filtering an Array

function removeIfLessThanFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(removeIfLessThanFive([1, 2, 4, 6, 8, 9, 55]));

// 7. Max sum in the Array (kadane's algorithm)

function maxArray(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    currentSum = Math.max((currentSum + currentNum), 0);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

// console.log(maxArray([4, 6, -3, 5, -2, 1]));

// 8. Merge Arrays

function smooshArrays(arr1, arr2) {
  let masterArray = arr1.concat(arr2);
  return masterArray.sort((a, b) => { return a - b; });
}
// console.log(smooshArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// 9. Remove Characters

function removeCharacters(string, removeChars) {
  let removeArr = [];
  for (let i = 0; i < removeChars.length; i++) {
    removeArr.push(removeChars[i]);
  }
  console.log(removeArr);
  let newArr = removeArr.join();
  console.log(newArr);

  return console.log(string.replace(/a|e|i|o|u/g, ''));
}
// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10. Products

function products(arr) {

}