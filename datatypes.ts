//boolean
let flag:boolean = true;
console.log("the value of the flag is " + flag);

//string
let myName: string  = "hello";
console.log("The word is " + myName);

//numba

let myNum: number = 42;
console.log("the number is " + myNum);

//array

let myArray: number[] = [1,2,4];

let myArray2: Array<string> = ["hello", "hi"];

for (let i = 0;<myArray.length>;i++){
    console.log("item " +myArray[i] + "is in my array");
}

myArray.forEach(function(item) { 
    console.log(item)
})


