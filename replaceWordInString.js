function replaceWordInString(str, word, replaceWith) {
  let result = '';
  let foundWord = str.search(word) !== -1;

  if(foundWord) {
    let isUpperCase = word[0] === word[0].toUpperCase();
    let cutStart = str.search(word);
    let cutEnd = cutStart + word.length;

    // First part of sentence
    result += str.slice(0, cutStart);

    // New word
    if (isUpperCase) {
      result += replaceWith[0].toUpperCase() + replaceWith.slice(1);
    } else {
      result += replaceWith;
    }

    // Sentence end
    result += str.slice(cutEnd);
  }
  return result;
}

replaceWordInString("Crazy fox Jumped over the lazy dog", "Jumped", "leaped");