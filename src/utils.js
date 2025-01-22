// Your code here

export function isPalindrome(word){


    if (!/^[A-Za-z]+$/.test(word)) {

        throw new Error("Only Alhabet Letters");

    }
    
    const wordLowerCase = word.toLowerCase();
    const wordBackwards = wordLowerCase.split("").reverse().join("");

    return wordLowerCase === wordBackwards;
}