// Return an English translated sentence of the passed binary string.
//
// The binary string will be space separated.
//
// Examples:
//
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110
// 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
//
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101
// 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"


function binaryAgent(str) {
  let arr = str.split(' ');
  let result = '';

  function binaryToInt(binaryStr) {
    let result = 0;

    for(let i = 0; i < binaryStr.length; i++) {
      let bitValue = binaryStr.charCodeAt(i) - "0".charCodeAt(0);

      if(bitValue === 1) {
        let index = binaryStr.length - 1 - i;
        result += Math.floor( Math.pow( 2, index) );
      }
    }
    return result;
  }

  arr.forEach(item => {
    result += String.fromCharCode(binaryToInt(item));
  });

  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 " +
  "01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");