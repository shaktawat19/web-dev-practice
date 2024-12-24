let str = "hello world"; 

function removeDuplicateLetters(str) {
    // Approach 1: Using inbuilt methods
    let mySet = new Set(str.split(''));
    let uniqueString = Array.from(mySet).join('');
    console.log(uniqueString);

    // Approach 2:
    
}
removeDuplicateLetters(str);