// 1. Reverse a String

// let str = "hello";
// result = str.split('').reverse().join('');
// console.log(result);

// 2. Check for Palindrome

function isPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
console.log(str1 +isPalindrome( str1));
console.log(str2 +isPalindrome( str2));
console.log(str3 +isPalindrome( str3));