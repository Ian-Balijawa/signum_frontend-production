export function convertToSentenceCase(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  const words = text.toLowerCase().split(' ');

  const sentenceCaseWords = words.map((word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  });

  const sentenceCaseText = sentenceCaseWords.join(' ');

  return sentenceCaseText;
}
