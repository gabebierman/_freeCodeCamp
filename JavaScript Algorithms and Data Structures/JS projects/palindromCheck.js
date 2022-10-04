const palindrome = (word) => {
    const reverseWord = word.split("").reverse().join("");
    let reverseWordStrip = reverseWord.replace(/[^a-zA-Z0-9]/g, "");
    let wordStrip = word.replace(/[^a-zA-Z0-9]/g, "");
    console.log(wordStrip, reverseWordStrip);
    if (reverseWordStrip.toLowerCase() === wordStrip.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};
