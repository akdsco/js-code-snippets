function stringReverse(input) {
  let inputArr = input.split('');
  let outputArr = [];

  for (let i = 0, j = inputArr.length - 1; i < inputArr.length; i++, j--) {
    outputArr[i] = inputArr[j];
  }

  // alternatively you can use this without introducing 'j' variable
  // for (let i = 0; i < inputArr.length; i++) {
  //   outputArr[i] = inputArr[inputArr.length - i - 1];
  // }

  // alternatively use Array.prototype.reverse() if possible

  return outputArr.join('');
}

stringReverse('Hello');
