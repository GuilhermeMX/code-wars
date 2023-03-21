function SpinningWords(string) {
  const splitWords = string.split(' ');

  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length >= 5) {
      splitWords[i] = splitWords[i].split('').reverse().join('');
    }
  }

  return splitWords.join(' ');
}

SpinningWords("realizando teste");