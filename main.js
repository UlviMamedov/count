function countVowels(s) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

alert(countVowels("Hello World"));
alert(countVowels("Hello World a"));