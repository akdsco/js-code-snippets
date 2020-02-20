// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the
// provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of
// two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every
// additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in
// either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain
// only unique values (no duplicates).
//
// Examples
//
// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

function sym() {
  let resultArray = [];

  for(let i = 0; i < arguments.length; i++) {
    arguments[i]
      // filter same values in each separate array
      .filter((item, index) => arguments[i].indexOf(item) === index)
      // decide if value should be added to or deleted from result array
      .forEach(item => {
        let index = resultArray.indexOf(item);
        if(index !== -1) {
          let lefSide = resultArray.slice(0,index);
          let rightSide = resultArray.slice(index + 1);
          resultArray = lefSide.concat(rightSide);
        } else {
          resultArray.push(item)
        }
      })
  }
  return resultArray.sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);