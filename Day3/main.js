// function greet(fname){
//     console.log("Hello " + fname);
// }

// greet("iti");


// var a = 10;
// var b = 20;
// var c = a + b;

// greet("ali");

// // ...a.toExponential.


// // 1k line code

// greet("ahmed");

////////////////////////////////////////////

// console.log(x); // undefined
// var x = "abc";
// console.log(x);   // abc

// function sum(a, b) {
//     x = "def";
//     console.log(x);  // def
//     return a + b;    // 30
// }

// var result = sum(10, 20);  // 30
// console.log(x); // def

///////////////////////////////////////


// console.log(x); // undefined
// var x = "abc";
// console.log(x);   // abc
// var fname = "ali";
// console.log("window.x = ", window.x);
// function sum(a, b) {
//     var x = "def";
//     this.fname = "ahmed";
//     this.x = "outside";
//     console.log(x);  // def
//     return a + b;    // 30
// }

// var result = sum(10, 20);  // 30
// console.log(x); // abc
// console.log(fname);

// var abc = `Hello World`;

// var abc = 15;


// let abc = `Hello World`;

// let abc = 15;  // error already declared

////////////////////////////////////////////////

// var x = "abc";
// console.log(x);   // abc

// function sum(a, b) {
//     for(var i=0; i<3; i++){
//         console.log(i);
//     }
//     i++;  
//     console.log(i);
//     return a + b;    // 30
// }
// // console.log(i); // error
// var result = sum(10, 20);  // 30
// console.log(i); // error

// console.log(x); // def

////////////////////////////////////////////////

// console.log(Math);
// var result = Math.PI;
// result = Math.sqrt(16);
// result = Math.pow(3,4);
// result = Math.abs(-10);
// result = Math.sign(-10);
// result = Math.sign(10);
// result = Math.sign(0);
// result = Math.max(1,3,4,5,2,323,2,-324,5,6,1232);
// result = Math.min(1,3,4,5,2,323,2,-324,5,6,1232);
// result = Math.round(3.4);
// result = Math.round(3.5023);
// result = Math.floor(3.4);
// result = Math.floor(3.999);
// result = Math.ceil(3.01);
// result = Math.ceil(3.999);
// list students stId (1,100)
// result = Math.floor(Math.random() * 100) + 1;
// console.log(result);

//////////////////// Object ///////////////////////

// var fname = "ali";
// var fname = "ahmed";

// var age = 23;
// var age = 30;


/* 
var objectName = {
    key1: value1,
    key2: value2,
    key3: value3,
};
*/


// var person = {
//     fname: "ali",
//     lname: "ahmed",
//     age: 23,
//     color: "white",
// };

// console.log(person);

// // 1. read values
// // dot notation
// console.log(person.fname);
// console.log(person.age);


// // subscript notation
// console.log(person["lname"]);
// console.log(person["color"]);

// // 2. get value (set value)

// // Dot notation
// person.age = "25";
// person.fname = "men3m";

// // Subscript notation
// person["color"] = "black";
// person["lname"] = "khan";

// // dot notation
// console.log(person.fname);
// console.log(person.age);


// // subscript notation
// console.log(person["lname"]);
// console.log(person["color"]);
// console.log(person["age"]);


// set: add new key value pair
// person.email = "men3m@gmail.com";
// console.log(person);

// // get
// console.log(person.trackProvider);
// console.log(person["trackProvider"]);


// var person = {
//     fname: "men3m",
//     lname: "khan",
//     age: 25,
//     address: {
//         city: "monoufia",
//         country: "egypt",
//         street: {
//             streetName: "stadium",
//             streetNo: 123
//         }
//     },
//     gender: true,
// };

// var human = {
//     fname: "ahmed",
//     lname: "ali",
// }
// console.log(human.age);

// // console.log(person.address.city);
// // console.log(person["address"]["country"]);

// // console.log(person.address["street"].streetName);
// // console.log(person["address"]["street"].streetNo);
// // console.log(person["address"]["street"]["streetNo"]);

// var myKey = "age";
// // alert("stop generating responses");
// console.log(person.myKey);   //undefined 
// console.log(person[myKey]);  //25  => arr[i]   person["age"]
// console.log(person["myKey"]);//undefined
 

////////////////////////////////////////////////////////////////


// dom : document
// console.log(document);

// var ourProducts = document.getElementById("head1");
// console.log(ourProducts);

// var p = document.getElementsByClassName("content");
// console.log(p)


// for(var i=0; i<p.length; i++){
//     console.log(p[i]);
// }



// var parent2 = document.getElementById("parent2");
// console.log(parent2);

// var p = parent2.getElementsByClassName("content")[0];
// console.log(p);

// var ourTeam = parent2.getElementById("head2");
// console.log(ourTeam); // error

// var span1 = document.getElementById("span2");
// console.log(span1);


// var a = document.getElementsByTagName("a");
// console.log(a);
// for(var i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// var a = document.getElementsByTagName("div");
// console.log(a);
// for(var i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// var input = document.getElementsByClassName("input")[0];
// console.log(input)

// var input = document.getElementsByName("myInput")[0];
// console.log(input);

/*
div{

}

.content{

}

div.parent{
}

div .content{
}

*/

// var img = document.querySelector("#sofa");
// console.log(img);

// var span = document.querySelector(".s1");
// console.log(span);

// var p = document.querySelector(".pp");
// console.log(p);



// var div = document.querySelectorAll("div.extra")[0];
// console.log(div);

// var div = document.querySelectorAll("div .content");
// console.log(div);


/////////////////// Properties /////////////////////////

// console.log(document.body);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);

// var parent = document.getElementById("parent");
// console.log(parent);
// console.log(parent.firstChild);
// console.log(parent.firstElementChild);

// console.log(parent.lastChild);
// console.log(parent.lastElementChild);

// console.log(parent.childNodes);
// console.log(parent.children);


////////////////// change content ///////////////////////

// var person = {
//     fname: "men3m"
// };

// person.fname = "ahmed";

// var parent = document.getElementById("parent")
// console.log(parent);
// var p = parent.querySelector(".content");
// console.log(p);
// p.innerHTML = "<h2>hello world!!</h2>";
// p.innerText = "<h2>hello world!!</h2>";
// p.textContent = "hello world!!";
// console.log(p);


//////////////// change style ////////////////////////
// 1. style object
// p.style.color = "blue";
// p.style.backgroundColor = "lightgray";
// p.style.fontSize = "30px";
// p.style.padding = "10px";
// p.style.borderRadius = "10px";
// p.style.border = "2px solid black";


// 2. classList : add, remove, toggle
// p.classList.add("myStyle");
// p.classList.remove("content");

// p.classList.toggle("myStyle");
// p.classList.toggle("content");

// console.log(p);

// 3. ClassName

// p.className = "myStyle";
// console.log(p);

// p.className = "content";
// console.log(p);

////////////////// Events //////////////////////////

// var p = document.getElementsByClassName("content")[0];
    // console.log(p);

var parent = document.getElementById("parent");
var p = parent.querySelector(".content");
// console.log(p);

function doSomething(){
    p.classList.add("myStyle");
    p.innerHTML = "This track is provided by iti monoufia branch";
}

function doAnotherThing(){
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

    p.classList.remove("myStyle");
}

function doOthers() { 
    console.log("btn clicked")
}

var input = document.querySelector("#input");
console.log(input);
function getText() { 
    console.log(input.value);
}
