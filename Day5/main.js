// // console.log(window);

// // alert("hi");
// // window.alert("hi");

// var openedWindow;
// function openWindow(){
//     // window.open();
    
//     // window.open("https://www.google.com/"); // target : _blank

    
//     // window.open("https://www.google.com/", "_self");

    
//     // window.open("https://www.google.com/", "_blank");

    
//     // window.open("https://www.google.com/", "", "width=300,height=300"); // target : _blank

    
//     // window.open("https://www.google.com/", "_self", "width=300,height=300"); 
    
//     // window.open("https://www.google.com/", "_blank", "width=300,height=300"); // target : _blank

//     // window.open("./about.html", "", "width=300,height=300");

//     openedWindow = open("./about.html", "", "width=300,height=300");
// }

// function closeWindow(){
//     // window.close();
//     // close();
//     if(Boolean(openedWindow)){
//         console.log("opened window was closed");
//         openedWindow.close();
//         openedWindow = undefined;
//     }else {
//         console.log("there's no opened window to close");
//     }
// }
// function moveToWindow(){
//     if(Boolean(openedWindow)){
//         openedWindow.moveTo(300,300);
//     }else {
//         console.log("there's no opened window to move");
//     } 
// }
// function moveByWindow(){
//     if(Boolean(openedWindow)){
//         openedWindow.moveBy(-30,-30);
//     } else {
//         console.log("there's no opened window to move");
//     }
// }
// function resizeToWindow(){
//     if(Boolean(openedWindow)){
//         openedWindow.resizeTo(500, 500);
//     } else {
//         console.log("there's no opened window to resize");
//     }
// }
// function resizeByWindow(){
//    if(Boolean(openedWindow)){
//         openedWindow.resizeBy(-30, -30);
//     } else {
//         console.log("there's no opened window to resize");
//     }
// }


/////////////////////////////////////////
            // location

// console.log(location);

// console.log(location.href);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(location.origin);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.search);

// var params = location.search.slice(1);
// // console.log(params);
// var data = params.split('&');
// // console.log(data);
// for(var i=0; i<data.length; i++){
//     // console.log(data[i])
//     var kvp = data[i].split('=');
//     // console.log("key =",kvp[0], "- val =",kvp[1]);
// }

// location.reload();


// location.assign("https://dummyjson.com");
// location.replace("https://www.google.com")

// function test(){
//     // console.log(history.length);
//     location.assign("https://www.google.com");
//     // location.replace("https://www.google.com")
// }

////////////////////////////////////////////////////////
                    // history
// console.log(history);
// console.log(history.back);
// console.log(history.forward);
// console.log(history.length);

///////////////////////////////////////
        // Navigator

// var isAllowed = confirm("iti wants to access your location?");
// console.log(isAllowed);


// function successCallback(){
//     console.log("your location is in monoufia");
// }

// function errorCallback(){
//     console.log("we can't get your location");
// }

// function getPosition(allow, deny){
//     if(isAllowed){
//         allow();
//     }else {
//         deny();
//     }
// }

// getPosition(successCallback, errorCallback);


// console.log(navigator);
// console.log(navigator.geolocation);


// function successCallback(geolocationPosition){
//     // console.log(arguments);
//     console.log(geolocationPosition);
//     console.log(geolocationPosition.coords);
//     console.log(geolocationPosition.coords.longitude);
//     console.log(geolocationPosition.coords.latitude);
//     console.log(geolocationPosition.coords.accuracy);
// }

// function errorCallback(geolocationPositionError){
//     // console.log(arguments);
//     console.log(geolocationPositionError.code);
//     console.log(geolocationPositionError.message);
// }

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// navigator.geolocation.getCurrentPosition(
//     function(geolocationPosition){
//         console.log(geolocationPosition.coords);
//     }, 
//     function(geolocationPositionError){    
//         console.log(geolocationPositionError.message);
//     }
// );

///////////////////////////////////////

            // Cookies

var person = {
    fname: "men3m"
};
person.color = "white";

// key value pair
// key=value
// document.cookie = "username=men3m";
// document.cookie = "branch=monoufia";
// document.cookie = "track=angular";
// document.cookie = "ST=true";

// override
// document.cookie = "username=ali";
// document.cookie = "color=green";

// console.log(document.cookie)

// var date = new Date();
// console.log(date);

// // day of the month
// console.log(date.getDate());

// // day of the week
// console.log(date.getDay());
/*
0: sunday
1: mon
2: tues
3: wedn
4: thrus
5: friday
6: saturday
*/

// // get month
// console.log(date.getMonth());

/*
jan: 0
feb: 1
mar: 2
apr: 3
may: 4


dec: 11
*/

// // get current year
// console.log(date.getFullYear());

// // get current hour
// console.log(date.getHours());

// // get current minutes
// console.log(date.getMinutes());

// console.log(date.getTime());



// var today = date.getDate();
// date.setDate(today + 4);

// date.setDate(date.getDate() + 4);

// console.log(date);

///////////////////////////////////////////////////////

            // persistant cookie

// document.cookie = "sport=football;expires="+expiryDate;

// var expiryDate = new Date();
// expiryDate.setDate(expiryDate.getDate()+5);
// console.log(expiryDate);
// document.cookie = `sport=football;expires=${expiryDate}`;

///////////////////////////////////////////////////////
                    // Delete Cookie

// var expirationDate = new Date();
// expirationDate.setDate(expirationDate.getDate()-3);
// console.log(expirationDate);
// document.cookie = "color=xx;expires="+expirationDate;

/////////////////////////////////////////////////////////

// function SaveCookie(key, value, expiryDate){
//     var cookieExpression = `${key}=${value}`;

//     if(Boolean(expiryDate)){
//         cookieExpression += `;expires=${expiryDate}`;
//     } 

//     document.cookie = cookieExpression;
// }


// SaveCookie("key", true);

// SaveCookie("username", "mahmoud");

// var expirationDate = new Date();
// expirationDate.setDate(expirationDate.getDate() + 5);
// SaveCookie("Provider", "ITI", expirationDate);


// console.log(document.cookie);


// function GetCookie(key){
//     var cookies = document.cookie.split(';');
//     for(var i=0; i<cookies.length; i++){
//         var cookie = cookies[i].split("=");
//         if(key == cookie[0]){
//             return {
//                 state: true, 
//                 value: cookie[1]
//             };
//         }
//     }
//     return {
//         state: false,
//         value: "",
//     };
// }
// var result = GetCookie("username");
// console.log(result.state);
// console.log(result.value);

/////////////////////////////////////////////////
            // Error Handling

// console.log("hello");
// try{
//     console.log("data is proccessed");
//     throw new Error("error occured"); // from db
//     console.log("data is retrieved");    
// }
// catch(e){
//     console.log(e.message);
// }
// finally{
//     //
// }

// console.log("abc");


///////////////////////////////////////////////////


// function div(a, b) { 
//     try 
//     {
//         if(!b){
//             throw new Error("You can't divide by zero!");
//         }
//         return a/b;
//     }
//     catch(e){
//         // console.log(e);
//         // console.log(e.message);

//         throw e;
//     }
//  }


//  function calc(a,b, operation) { 
//     var result;
//     try{
//         if(operation == '/'){
//             result = div(a,b);
//         }
//     }
//     catch(e){
//         console.log(e);
//     }
//     return result;
//   }

//  console.log(div(6,2)); // 3
//  console.log(div(10, 0)); // divide by zero exception  | infinity
//  console.log(div(10, 2)); // 5

//  console.log(calc(6,2, '/'));
// calc(10, 0, '/'); 
//  console.log(calc(10, 2, '/'));

///////////////////////////////////////

// bad code: doesn't follow best practices

// function div(a, b) { 
//     if(!b){
//         throw new Error("You can't divide by zero!");
//     }
//     return a/b;
//  }


// try{
//     div(3,0);
// }
// catch(e){
//     console.log(e.message);
// }

// try{
//     div(3,0);
// }
// catch(e){
//     console.log(e.message);
// }

// try{
//     div(3,0);
// }
// catch(e){
//     console.log(e.message);
// }

// try{
//     div(30,10);
// }
// catch(e){
//     console.log(e.message);
// }

// try{
//     div(6,2);
// }
// catch(e){
//     console.log(e.message);
// }