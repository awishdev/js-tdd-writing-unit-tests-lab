// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true if the word is the same reversed", () => {

        const word = "racecar";
        const result = isPalindrome(word);

        expect(result).toBe(true);
    });
    it("returns false if the word is not the same reversed", () => {

        const word = "car";
        const result = isPalindrome(word);

        expect(result).toBe(false);
    });
    it("return true if words have uppercase and lowercase", () => {

        const word = "TacOCat";
        const result = isPalindrome(word);

        expect(result).toBe(true);
    });
    it("throw an error if there any non-alphabet characters", () => {

        const word = "t4co c4t";
        
        expect(() => isPalindrome(word)).toThrow();
    });
    it("throws an error if its an empty string", () => {

        const word = "";

        expect(() => isPalindrome(word)).toThrow();
    });
});