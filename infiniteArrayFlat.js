// Flatten a nested array. You must account for varying levels of nesting.
//
// Examples:
//
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
//

function flatArray(arr) {
  const result = [];

  const flattenHelper = array => {
    array.map(i => {
      Array.isArray(i) ? flattenHelper(i) : result.push(i)
    })
  };
  flattenHelper(arr);

  return result
}

flatArray([1, [2], [3, [[4]]]]);