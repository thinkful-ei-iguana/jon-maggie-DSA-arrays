/* eslint-disable no-console */
//import Array from './Array';

const Array = require('./Array');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
}

console.log(main([1,2,3,6,7]));