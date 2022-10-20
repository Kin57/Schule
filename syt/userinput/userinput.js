let input = document.getElementById("input");
let button = document.getElementById("button");
let greeting = document.getElementById("greeting");


let username;
input.innerHTML=('<input id="name" type="text" placeholder="Name">');
button.innerHTML=('<button onclick="saveName()">Save Name</button>');
function saveName(){
    username = document.getElementById("name").value;
    greeting.innerHTML=('<p>Hello '+ username +'</p>')
    input.innerHTML=('<input id="age" type="text" placeholder="Age">');
    button.innerHTML=('<button onclick="saveAge()">Save Age</button>');
}

function saveAge(){
    age = document.getElementById("age").value
}