let menuOutput = document.getElementById(menu);

let btn = document.getElementById("button");
btn.innerHTML = "Read More";

btn.onclick = function(){
    menuOutput.style.visibility = "visible";
}
