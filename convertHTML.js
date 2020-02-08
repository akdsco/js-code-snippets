// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//
// Examples
// convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos
// convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;

function convertHTML(str) {
  let strArr = [...str];
  let resultArr = [];

  strArr.forEach( (ch, i) => {
    switch(ch) {
      case '&':
        resultArr[i] = '&amp;';
        break;
      case '<':
        resultArr[i] = '&lt;';
        break;
      case '>':
        resultArr[i] = '&gt;';
        break;
      case '"':
        resultArr[i] = '&quot;';
        break;
      case "'":
        resultArr[i] = '&apos;';
        break;
      default:
        resultArr[i] = ch;
    }
  });
  return resultArr.join('');
}

convertHTML("Dolce & Gabbana");