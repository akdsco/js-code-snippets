// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more
// arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// You have to use the arguments object.
//
// Examples
//
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].

function destroyer() {
  let arr = arguments[0];
  let flag = false;

  let result = arr.map(item => {
    for(let i = 1; i < arguments.length; i++) {
      if(item === arguments[i]) {
        console.log(item);
        flag = true;
      }
    }
    if(!flag) {
      return item
    } else {
      flag = false;
      return -Infinity
    }
  });

  return result.filter(x => x !== -Infinity);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);