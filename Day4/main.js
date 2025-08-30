// console.log(document.links);

// var link = document.links[1];
// console.log(link);

// console.log(link.getAttribute("href"));

// console.log(link.getAttribute("class"));
// console.log(link.getAttribute("target"));


// link.setAttribute("id", "_linkedIn");
// console.log(link);

// link.removeAttribute("class");
// console.log(link);

// var result = link.hasAttribute("id");
// console.log(result);

// result = link.hasAttribute("class");
// console.log(result);

// if(link.hasAttribute("id")){
//     link.removeAttribute("id");
// } else {
//     link.setAttribute("id", "_linkedIn")
//     //// console.log("test");
// }

// if(link.hasAttribute("class")){
//     link.removeAttribute("class");
//     console.log("test");
// } else {
//     link.setAttribute("class", "linkedIn")
// }

// console.log(link);

//////////////////////////////////////////

// var person = {
//     age: 22
// };

// person.color = "white";
// console.log(person);


// var p = document.createElement("p");
// p.textContent = "this is our element";
// // p.classList.add("content");
// p.setAttribute("id", "ppp");
// p.id = "pp";
// console.log(p);


// var div = document.querySelector(".new");
// console.log(div);
// // div.appendChild(p);
// // div.append(p);

////////////////////////////////////////


// var p = document.createElement("p");

// var textNode = document.createTextNode("hi as node");

// p.append(textNode);

// p.textContent = "this is our element";
// p.classList.add("content");
// p.setAttribute("id", "ppp");
// p.id = "pp";
// console.log(p);

// var div = document.querySelector(".new");
// console.log(div);
// div.appendChild(p);
// div.append(p);

////////////////////////////////////////////////

// var createElementBtn = document.getElementById("btn2");
// // console.log(createElementBtn);
// var i = 1;
// function CreateElement() {     
//     var p = document.createElement("p");

//     var span = document.createElement("span");

//     var result1 = p.appendChild(span);
//     // console.log("after adding span into p", result1);

//     var textNode = document.createTextNode(`day ${i++}`);

//     var result2 = span.append(textNode);
//     // console.log("after adding text node intp span", result2);

//     // createElementBtn.after(p);
//     createElementBtn.before(p);
// }

///////////////////////////////////////////////////////
                  // Events
// 1. Add Attributes
// onclick="execute()"


// 2. Attach Function

// var person = {fname: "men3m"};
// person.branch = "monoufia";
// console.log(person);
// var btn = document.querySelector("#btn");
// console.log(btn);
// btn.onclick = function execute(){
//     console.log("btn was clicked");
// }


// function execute(){
//     console.log("btn was clicked");
//     // return undefined;
// }

// btn.onclick = execute();   // xxxx
// btn.onclick = undefined;   // xxxx

// btn.onclick = execute;  // js engine



//////////////////////////////////////////


// var btn = document.querySelector("#btn");

// btn.onclick = function (){
//     console.log("btn was clicked");
// }

// btn.ondblclick = function (){
//     console.log("btn was double clicked");
// }

// btn.onmouseenter = function (){
//     console.log("mouse entered");    
// }

// btn.onmouseleave = function (){
//     console.log("mouse leaved");    
// }

///////////////////////////////////////

// var head = document.querySelector("#head1");
// console.log(head);

// function changeContent(){
//     head.innerHTML = "<h4>Our Branches</h4>";
// }

// function changeStyle(color){
//     color = color || "Brown";
//     head.style.color = color;
// }

// btn.onclick = changeStyle;
// btn.onclick = changeContent;


// function cb() { 
//     changeStyle();
//     changeContent();
// }

// btn.onclick = cb;


// btn.onclick = function () { 
//     changeStyle();
//     changeContent();
// };


/////////////////////////////////////////////////

// 3. Add Event Listener

// function callback(){
//     console.log("add event lisnter invoked");
// }

// btn.addEventListener('click', callback);


// btn.addEventListener('click', function (){
//     console.log("add event lisnter invoked");
// });


// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', changeStyle);

//////////////////////////////////////////////////

// var color = prompt("enter color");

// btn.onclick = function (e){
//     // console.log(arguments);
//     // var button = e.target;
//     console.log(e.target.textContent);
//     changeStyle(color)
// };



// function greet(fname){
//     console.log(arguments);
//     console.log("hello", fname);
// }

// greet();

// greet("men3m");



// btn.addEventListener('click', function (e){
//     // console.log(arguments);
//     // var button = e.target;
//     console.log(e.target.textContent);
//     changeStyle();
// });



// var input = document.querySelector("#input");
// console.log(input);


// input.oninput = function(e){
//     // console.log(e.target.value);
//     console.log(input.value);
// }

// input.onclick = function(e){
//     console.log(e.target.value);
// }


// input.onchange = function(e){
//     // console.log(e.target.value);
//     console.log(input.value);
// }

// input.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

// var i = 1;
// function showAds(){
//     console.log(`Ads ${i++}`);
// }
// window.setTimeout(showAds,3000);
// setTimeout(showAds,3000);

// window.setInterval(showAds, 1000);
// var intervalId = setInterval(showAds, 1000);

// function stopAds(_intervalId){
//     clearInterval(_intervalId)
// };

// setTimeout(function(){
//     stopAds(intervalId);
// }, 5000);


///////////////////////////////////////

// var btn = document.querySelector("#btn");

// function addOffer(price){
//     return price*0.9;
// }

// function pay(price){
//     console.log(`amount ${price} has been from your visa`);
// }

// var price = 10;
// function originalPayment(){
//    pay(price);
// }

// function paymentWithSale(){
//     var priceAfterSale = addOffer(price)
//     pay(priceAfterSale);
// }

// btn.addEventListener('click', paymentWithSale);

// setTimeout(function(){
//     btn.removeEventListener('click', paymentWithSale);
//     console.log("sale finished");
//     btn.addEventListener('click', originalPayment);
// }, 10000);


/////////////////////////////////////////////////


var input = document.querySelector("#input1");
console.log(input);
var error = document.querySelector(".errorMessage");
console.log(error);

function validateUserName(value){
    // console.log(value, value.length);
    if(value.length < 5){
        input.style.border = "2px solid red";
        error.style.display = "block";
        return false;
    }

    input.style.border = "2px solid green";
    error.style.display = "none";
    return true;    
}

input.addEventListener('input', function (e){
    validateUserName(e.target.value);
});


input.addEventListener('blur', function(e){
    validateUserName(e.target.value);
});

// input.addEventListener('focus', function(e){
//     validateUserName(e.target.value);
// });


function login(e){
    e.preventDefault();
    var isValid = validateUserName(input.value);
    if(isValid){
        console.log("logged in successfully");
    } else{
        console.log("login failed");
    }
}