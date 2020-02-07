/* Function takes in string value, splits it into array.
 * Iterates over array and reverses DNA values.
 * Returns 2D array with initial value in position [0] and reversed value in pos [1];
 *
 * reverseValuesInString("ATCGA");
 *
 * [ [ 'A', 'T' ],
     [ 'T', 'A' ],
     [ 'C', 'G' ],
     [ 'G', 'C' ],
     [ 'A', 'T' ]
   ]
 */

function reverseValuesInString(str) {
  let arr = str.split('');
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    arrResult[i] = [];
    arrResult[i][0] = arr[i];

    switch(arr[i]) {
      case 'A':
        arrResult[i][1] = 'T';
        break;
      case 'T':
        arrResult[i][1] = 'A';
        break;
      case 'C':
        arrResult[i][1] = 'G';
        break;
      case 'G':
        arrResult[i][1] = 'C';
        break;
      default:
        return ''
    }
  }

  return arrResult;
}

reverseValuesInString("ATCGA");