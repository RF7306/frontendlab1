//function to return count of num of characters in a string
function countChar(word) {
    return word.length;
}
console.log(countChar(" test1"));
//function to count spaces 
function countSpace(wordSpace) {
    return wordSpace.trim().length;
}
console.log(countSpace("test2"));
//function that combines both functions above
function countBoth(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.trim().length;
    }
    return count;
}
console.log(countBoth("test1", true));
console.log(countBoth("test2", false));
console.log(countBoth("test3"));
