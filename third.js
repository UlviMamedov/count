function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    let shortestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }

        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }

    // Повертаємо результат
    if (longestWord === shortestWord) {
        return `longest: ${longestWord}`;
    } else {
        return `longest: ${longestWord}, first shortest: ${shortestWord}`;
    }
}

alert(findLongestWord("The quick brown fox jumped over the lazy dog"));
