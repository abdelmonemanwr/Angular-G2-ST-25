// console.log("Hello from main.js");


var fname = "men3m";
// console.log(fname);

var flag = true;
// console.log(flag);

var number = 24;
// console.log(number);

var currentTrackName = "Angular";
// console.log(currentTrackName);

// not allowed to use reserved keywords as variable names
// var if = "test";
// console.log(if);


// console.log(typeof(fname));
// console.log(typeof(number));
// console.log(typeof(flag));


// var age;
// console.log(age)
// console.log(typeof(age));

// var students = null;
// console.log(students)
// console.log(typeof(students));


// 1. reassign
// var x = 23;
// x = 45;
// console.log(x);



// 2. redeclare
// var y = "mona";

// console.log(y);
// console.log(typeof(y));


// var y = true;

// console.log(y);
// console.log(typeof(y));


//////////////////////////////////////////////////

// null not a zero  
// null is an object
// zero is a number, value = 0
// null is null, value = empty object

/////////////////////////////////////////////////



// 1. Literal Creation
// var x = 23;
// var y = "mona";


// 2. Method Creation
// var x = Number(25);
// console.log(typeof(x));
// var y = String("mona");
// console.log(typeof(y));

// var x = Number(25);
// console.log(typeof(x));

// var x = String("mona");
// console.log(typeof(x));


// var x = Number("25");
// console.log(typeof(x));
// console.log(x);

var x = Boolean("iti");
// console.log(typeof(x));
// console.log(x);  // NaN  not a number

// var y = String(25);
// console.log(typeof(y));
// console.log(y);  

// var z = Number("5");
// console.log(isNaN(x));
// console.log(isNaN(z));

// falsy values
/*
    false
    0
    ""
    null
    undefined
    NaN
*/

// var flag = Boolean(0);
// console.log("");


// truthy values
// console.log(Boolean(" "));
// console.log(Boolean([1,2]));
// console.log(Boolean("ali"));
// console.log(Boolean(NaN));

// plus operator
// 1. addition
// var x = 4;
// var y = 6;
// console.log(x + y); 
// 2. concatenation
// var fname = "men3m";
// var lname = "ali";
// console.log(fname + lname);

// var a = 14;
// var b = "10";
// console.log(a+b);


// var a = 14;
// var b = "iti";
// console.log(a+b);
// console.log(typeof(a));

// coercion: process of converting a value from one type to another (string, number, boolean)

// var a = 14;            // 14
// var b = Number("iti"); // NaN
// console.log(a+b);      // 14 + NaN = NaN

// var a = 14;            // 14
// var b = Number("10");  // 10
// console.log(a+b); 


////////////////////////////////////////////////////////


// var a = 13;
// var b = NaN;
// console.log(a+b);


// var a = 13;
// var b = undefined; // nan
// console.log(a+b);


// var a = undefined; // nan
// var b = undefined; // nan
// console.log(a+b);  // nan


// var a = 13;
// var b = null;
// var aa = Number(a); // 13  on the fly by js engine
// var bb = Number(b); // 0   on the fly by js engine
// console.log(a+b);  // 13 + 0 = 13


// var a =  10;
// var b = "7";
// // var bb = Number(b); // 7
// console.log(a-b); // 3


// var a =  10;
// var b = "iti";
// // var bb = Number(b); // NaN
// console.log(a-b); // NaN

///////////////////////////////////////////////

// var a = 10;
// var b = "7";
// console.log(a>b);  // true


// var a = 10;
// var b = "iti"; // NaN
// console.log(a>b);  // false


// == : compare values only = true
// var a = 10;
// var b = "9";
// console.log(a==b);

// ===: comapre values + data types => true

// var a = 10;
// var b = "10";
// console.log(a === b);


// var n1 = true;
// var n2 = "true";
// console.log(n1==n2); // false

// var n11 = Number(n1); // 1
// var n22 = Number(n2); // NaN
// console.log(n11==n22);//1==NaN => False

// console.log(n1===n2); // false

//////////////////////////////////

// logical operators

// AND && : a && b => true if both a & b are true
// OR  || : a || b => false if both a & b are false
// NOT  ! : !a => toggle (true=>false, false=true)



// true || false;

// short-circuit evaluation
// var a = "mona";
// var b = "ali";

// console.log(a || b);  

// var a = "";
// var b = "ali";

// console.log(a || b);


////////////////////

// var a = "mona";
// var b = "ali";

// console.log(a && b);  

// var a = 0;
// var b = "ali";

// console.log(a && b);

///////////////////////////////////////
// conditional statements
// if , if-else, if-else if-else, switch

// var x = -10;
// if(x > 0){
//     console.log("x is positive");
// }
// else if (x < 0){
//     console.log("x is negative");
// }
// else if (){}
// else {
//     console.log("x is zero");
// }

// // odd or even
// var num = 50;
// if(num%2==0) {
//     console.log("even");
// }
// else {
//     console.log("odd");
// }


// switch statement
// var day = 7;
// switch(day){
//     case 1:
//         console.log("saturday"); 
//         break;
//     case 2: 
//         console.log("sunday"); 
//         break;
//     case 3: 
//         console.log("monday"); 
//         break;
//     case 4: 
//         console.log("tuesday"); 
//         break;
//     case 5: 
//         console.log("wednesday"); 
//         break;
//     case 6: 
//         console.log("thursday"); 
//         break;
//     case 7: 
//         console.log("friday"); 
//         break;
//     default: 
//         console.log("invalid day");
// }

//////////////////////////////////////////////

// var x = 10;
// x = x+1;
// x++;
// ++x;

// x = x+4;
// x+=4;


// loops
// for, while, do-while

// for(var i=0; i<5; i++){
//     console.log(i);
// }

//     counter  break  step
// for(var i = 0; i < 5; i++){
//     if(i==2){
//         continue;
//     }
//     console.log(i);
// }

// for(var i = 0; i < 5; i++){
//     if(i==2){
//         break;
//     }
//     console.log(i);
// }


// var i=0;
// for( ; ; ){

//     if(i>=5){
//         break;
//     }

//     console.log(i);

//     i+=1;
// }



// var i=0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// var i=0;
// while(true){
//     if(i>=5){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// var i=0;
// do{
//     console.log(i);
//     i++;
// }while(i > 0 && i < 5);

//////////////////////

// ternary operator

// var num = 51;
        //    true   false
// condition ? exp1 : exp2


        // if(num%2==0) {
        //     console.log("even");
        // }
        // else {
        //     console.log("odd");
        // }
    // num % 2 == 0
    //     ? console.log("even") 
    //     : console.log("odd");
   

        var x = 0;
        // if(x > 0){
        //     console.log("x is positive");
        // }
        // else if (x < 0){
        //     console.log("x is negative");
        // }
        // else {
        //     console.log("x is zero");
        // }
    

    /* 
        condition 
            ? exp1 
            : condition2 
                ? exp2 
                : exp3
    */

    // x > 0 
    //     ? console.log("x is positive")
    //     : x < 0
    //         ? console.log("x is negative")
    //         : console.log("x is zero");

/////////////////////////////////////////
// var a = prompt("enter a number"); // "1"
// var b = prompt("enter a number"); // null => "null"
// console.log(a+b);

// var a = Number(prompt("enter a number")); // "1"
// var b = Number(prompt("enter a number")); // null => "null"
// console.log(a+b);

// var a = +prompt("enter a number"); // "1"
// var b = +prompt("enter a number"); // null => "null"
// console.log(a+b);

// var a = prompt("enter a number"); // "1"
// var b = prompt("enter a number"); // null => "null"
// console.log(+a + +b);

// var a = Number(prompt("enter a number")); // NaN
// var b = Number(prompt("enter a number")); // Nan
// console.log(a+b);  // NaN


// do{
//     var a = Number(prompt("enter a number"));
// }while(isNaN(a));
// do{
//     var b = Number(prompt("enter a number"));
// }while(isNaN(b));
// console.log(a+b);


// var a = Number(prompt("enter a number"));
// while(isNaN(a)){
//     a = Number(prompt("enter a number"));
// }
// var b = Number(prompt("enter a number"));
// while(isNaN(b)){
//     b = Number(prompt("enter a number"));
// }

// console.log(a+b);


// document.writeln("Hello from external file");

// document.writeln("<h2>men3m's greeting you</h2>");


// console.log("test 1");

// alert("this is our first day in js"); 

// console.log("test 2");

// var result = confirm("Are you sure you want to delete this item?");
// console.log(result);

// if(result){
//     console.log("item deleted");
// }
// else {
//     console.log("operation cancelled");
// }
