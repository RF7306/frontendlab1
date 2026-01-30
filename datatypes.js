//boolean
var flag = true;
console.log("the value of the flag is " + flag);
//string
var myName = "hello";
console.log("The word is " + myName);
//numba
var myNum = 42;
console.log("the number is " + myNum);
//array
var myArray = [1, 2, 4];
var myArray2 = ["hello", "hi"];
for (var i = 0; ; i++) {
    console.log("item " + myArray[i] + "is in my array");
}
myArray.forEach(function (item) {
    console.log(item);
});
