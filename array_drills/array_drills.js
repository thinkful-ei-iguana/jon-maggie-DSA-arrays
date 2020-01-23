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

main();

// PUSH:
// What is the length, capacity and memory address of your array with arr.push(3)?:
// {length: 1, _capacity: 3, ptr: 0}

// What is the length, capacity and memory address of your array? Explain the result 
// of your program after adding the new lines of code.
// {length: 6, _capacity: 12, ptr: 0}
// length of the array is 6 elements long; the initial capacity of 3 was breached, and so 
// the array resized according to the array's length of 4 (the point at which the length became
// greater than the capacity) tripled. The address/pointer remains at index 0.

////////////////////////////////////

// POP:
// What is the length, capacity, and address of your array? Explain the result of your program 
// after adding the new lines of code:
// {length: 3, _capacity: 12, ptr: 0}
// We have popped three elements off the end of the array, and so our length has decreased from
// 6 to 3 elements.

/////////////////////////////////////

// PRINT, EMPTY, RESIZE:
// Print first item in the array: 3
// Empty the array and add just 1 item: arr.push("tauhida"); Print this 1 item that you just added. 
// What is the result? Can you explain your result?:
// Result is NaN