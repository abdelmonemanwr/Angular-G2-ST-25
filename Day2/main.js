/// sequential programming paradigm

// var a = 23;
// var b = 34;
// console.log(a + b);

// /// 100 codes

// var c = 23;
// var d = 34;
// console.log(c + d);

// // 200 codes

// var e = 23;
// var f = 34;
// console.log(e + f);


/// functional programming paradigm

// function functionName (parameters){
//     // function body 
// }

// functionName(arguments);
// 1. Don't repeat yourself (DRY)
// 2. Reusability
// 3. Allow Maintainability
// 4. Generic

// function add(){
//     var a = 23;
//     var b = 34;
//     console.log(a + b);
// }

// add();

// function add2(){
//     var a = 123;
//     var b = 21;
//     console.log(a + b);
// }

// add2();

// function add(a, b){
//     console.log(a + b);
// }

// add(12, 23);
// add(123, 21);
// add(1, 3);


// return type;
// function add(a, b){
//     console.log(a + b);
// }

// int sum(int a, int b){
//     return a + b;
// }

// function sum(a, b){
//     console.log("a = ", a);
//     console.log("b = ", b);
//     // console.log(arguments);
//     return a + b;
// }

// var result = sum(12, 23);
// console.log("Result is : " + result);

// console.log("Result is : " + sum(12, 23));

// calling : sum(12, 23);
// console.log(sum)


// console.log(sum());

// console.log(sum(12));

// console.log(sum(12,23));

// console.log(sum(12,20,34,54,43));

// function add(a, b){
//     console.log(a + b);
// }

// var result = add(12, 23);
// console.log("Result is : " + result);

// console.log(multi(2, 3));  // error

// function types
// 1. Function Statement (Function Declaration)

// function multi(a, b){
//     return a * b;
// }

// 2. function Expression

// var sum = 1+5;
// var result = function (a, b){
//     return a * b;
// }

// console.log(result(2, 3));
// console.log(result);

// console.log(multi);
// console.log(multi(2, 3));

// 3. Anonymous Function
// function (a, b){
//     return a * b;
// }

// var mul = function (a, b){
//     console.log(a * b);
// }

// var x = mul(2, 3);
// console.log(x);

////////////////////////////////

// console.log(age);
// var age = 23;


// console.log(window);
// console.log(this);

// var _window = "This is Window Variable";
// var _this = _window;

// console.log(_this);
// console.log(_window);


/* 
    1. Declaration Phase
        a. Create Global Execution Context 
        b. Create global object (window)
        c. Create Special Variable called (this) and point to window object.
        4. allocate memory for 
            i.  any variable declared by keyword (var).
            ii. any function statement (declaration).
*/


// console.log(window);

// window.alert("Hello from JS File");

// 2. Execution Phase

////////////////////////////////////////////
// console.log(age);
// var age = 23;
// console.log(age);

// greet("Men3m");
// function greet(fname){
//     console.log("Hello " + fname);
// }
// greet("ITI");

// // result(2, 3);
// var result = function (a, b){
//     return a * b;
// }
// result(2, 3);

/////////////////////////////////


// console.log(age); // error
// let age = 23;
// console.log(age);

//////////////////////////////////



// function greet1(fname){
//     console.log("Hello " + fname);
// }

// var myName = "Men3m";

// greet1(myName); // myName is passed as an argument to the function greet1


/// callback function
// function passed as an argument to another function

// function greet2(func){
//     console.log(func);
//     console.log("Hello " + func());
// }

// var myName = function(){
//     return "Men3m";
// }

// greet2(myName);

// greet2(function(){
//     return "Men3m";
// });

// greet2(function(){return "ITI";});

// var instructorName = prompt("Please enter instructor name: ");


// function greet(func, fname) { 
//     console.log(func);
//     func(fname);
// }

// function summerTrainning(instructorName) { 
//     instructorName = instructorName || "Unknown"; // default value using short-circuit evaluation
//     console.log(instructorName);
//     console.log("Hello from Summer Training", instructorName);
// }

// summerTrainning();
//  console.log(summerTrainning);

// greet(summerTrainning, instructorName);

// greet(summerTrainning(instructorName));

// summerTrainning();


// x(func1, time);
// y(func2, time);
// z(grant, deny);


// ///////////////////////////////////////////
// String Object

         //  012345678910  from 0 to length-1
var fname = "HellO WorlD";
// console.log(fname);
// console.log(fname[1]);
// console.log(fname[100]);
// console.log(fname.charAt(1));
// console.log(fname.length);
// for(var i=0; i<fname.length; i++){
//     console.log(fname[i]);
// }

// var result = fname.lastIndexOf('l'); // 4
// result = fname.indexOf('l'); // 4

// result = fname.includes('lo');
// result = fname.includes('lo',3);

// result = fname.toUpperCase();
// result = fname.toLowerCase();

// var str = "    Hello World    ";
// result = str.trim();
// result = str.trimStart();
// result = str.trimEnd();


// fname = "username=admin; password=12345; domain=iti;";
// result = fname.split("; ");
// for(var i=0; i<result.length; i++){
//     // console.log(result[i])
//     var data = result[i].split("=");
//     console.log(data);
//     console.log(data[0] + " --> " + data[1]);
// }


// var str = "javaScript";
// var str2 = " - ES6";
// result = fname.concat(str, str2);


// result = fname.startsWith("he");
// result = fname.startsWith("lD", 4);
// result = fname.startsWith("O WorlD", 4);


// console.log(result);


///////////////////////////////////////////////////

// Array Object

var data = [
   
    23, 
    "Hello", 
    true, 
    45.67, 
    function(){ 
        return "JS"; 
    }, 
    [
        false, 
        "World", 
        34
    ],
    {
        id: 101, 
        name: "Men3m"
    },
    "men3m"
];


// for(var i=0; i<data.length; i++){
//     console.log(data[i]);
//     if(i==4){
//         console.log(data[i]());
//     }
// }


// add new element to the array
// push => end
// unshift => start

// remove element from the array
// pop => end
// shift => start


// var newLength = data.push("ITI"); // add new element at the end of the array
// console.log(newLength);


// var poppedElement = data.pop(); // remove the last element from the array

// console.log(poppedElement)


// var unShifttedElement = data.unshift("ITI"); // add new element at the beginning of the array

// console.log(shifttedElement)


// var shifttedElement = data.shift(); // remove the first element from the array

// console.log(shifttedElement)

// var arr = ["ahmed", "mona", [1,2,3]];
// var newArray = data.concat(arr);
// console.log(newArray);

// data.reverse();
// console.log(data)


// var slicedArray = data.slice(1, 4); // from index 1 to index 3 (4-1)

// console.log(slicedArray);


var numbers = [101, 25, 91, 19, 5, 17, 3];
// 4-100 => negative
// 100-4 => positive
function compareFn(a, b){
    // console.log("a = ", a, " , ", "b = ", b);
    // return a - b; // ascending order
    return b - a; // descending order
}

numbers.sort(compareFn);


// not acceptable
// for(var i=0; i<numbers.length; i++){
//     for(var j=i+1; j<numbers.length; j++){
//         if(numbers[i] > numbers[j]){
//             // swap
//             var temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }


console.log(numbers)

