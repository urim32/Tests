function palindrome(str) {
    let leng = str.length - 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[leng - i]) {
            continue;
        } else {
            return false
        }

    }
    return true;
}
palindrome("123");
let assert = require("chai").assert;
it("should return true when string is palindrome", () => {
    assert.equal(palindrome("12321"), true, "'12321' is polidrome");
})
it("should return false when string is not palindrome", () => {
    assert.equal(palindrome("abcde"), false, "'abcde' is not polidrome");
})