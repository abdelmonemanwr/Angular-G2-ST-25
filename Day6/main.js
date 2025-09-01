// btn.onclick = function(){ }
// abc.onreadystatechange = function(){}



var xhr = new XMLHttpRequest();
var tbody = document.getElementById("tbody");
var fetchUserDataBtn = document.getElementById("btn");
var jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/users/3";
var mockApiUrl = "https://68b535a2e5dc090291ae35da.mockapi.io/api/crud/users/1";


function fetchUserDataCallback(){
    xhr.open("GET", mockApiUrl, true);
    xhr.send("");

    xhr.onreadystatechange = readyStateCallback;
}

function deleteUserDataCallback(){
    xhr.open("DELETE", mockApiUrl, true);
    xhr.send("");

    xhr.onreadystatechange = readyStateCallback;
}

function postUserDataCallback(){
    xhr.open("POST", mockApiUrl, true);
    // // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    var newUser = {
        id: 1,
        name: "men3m",
        age: 25,
        gender: true,
        birthDate: 1756715566,
        image: "https://avatars.githubusercontent.com/u/99240154"
    };

    xhr.send(JSON.stringify(newUser));

    xhr.onreadystatechange = readyStateCallback;
}

function readyStateCallback(e){
    //e.target = xhr
    
    if(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300){ // completed & success
        console.log(xhr.status);

        console.log(xhr.response); // json: text

        // var person = JSON.parse(xhr.responseText);
        // console.log(person); // js object notation

        // var row = document.createElement("tr");
        // row.innerHTML = `
        //     <td>${person.name}</td>
        //     <td>${person.image}</td>
        //     <td>${person.email}</td>
        //     <td>${person.birthDate}</td>
        // `;
        // tbody.appendChild(row);

    }
};


fetchUserDataBtn.addEventListener('click', deleteUserDataCallback);






/*
xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);

// xml
<newPerson>
    <name>men3m</name>
    <age>20</age>
    <address>
        <street></street>
        <street></street>
        <street></street>
    </address>
</newPerson>

//json
// input: men3m
// input: 20

var newPerson = {
    name: "men3m",
    age: 20
};

var json = JSON.stringify(newPerson);

console.log(json);
xhr.send(json);
*/
