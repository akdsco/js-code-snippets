// Function looks for duplicate chars in string. If finds, it will count it as one.
// If there is more than 2 occurrences of certain char, it will still count is as one duplication.

duplicateCharacters = function(input) {
  var counts = {};

  var ch, index, len, count;

  for (index = 0, len = input.length; index < len; ++index) {
    ch = input.charAt(index);
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
  }

  var result = 0;

  for (ch in counts) {
    if(counts[ch] > 1)
      result += 1;
  }

  return result;
};

duplicateCharacters('maam!!');