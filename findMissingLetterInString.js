/* Takes string and returns letters that are missing from the alphabet
 *
 * Examples:
 *
 * findMissingLetterInString("abce") should return "d".
 * findMissingLetterInString("stvwx") should return "u".
 * findMissingLetterInString("abcdefghjklmno") should return "i".
 * findMissingLetterInString("bcdf") should return "e".
 * findMissingLetterInString("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */

function findMissingLetterInString(str) {

  let charStart = str.charCodeAt(0);
  let charStop = charStart + str.length;
  let i = charStart;
  let j = 0;
  let result = '';

  for(; i < charStop; i++) {
    if(str.charCodeAt(j) !== i) {
      result += String.fromCharCode(i);
      charStop++;
      j--;
    }
    j++
  }
  console.log(result);

  return result.length > 0 ? result : undefined;
}

findMissingLetterInString("abcefh");
findMissingLetterInString("abcdefghijklmnopqrstuvwxyz");