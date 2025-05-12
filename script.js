function firstNonRepeatedChar(str) {
   function firstNonRepeatedChar(str) {
 const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatedChar("aabbcdd"));
console.log(firstNonRepeatedChar("aabbcc"));
//const input = prompt("a");
//for (let index = 0; index < bound; inde++) {
	
//}
//alert(firstNonRepeatedChar(input)); 
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input))
