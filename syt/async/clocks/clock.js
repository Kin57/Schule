let output = document.getElementById("output");

let tickLog = false;
for(let i=0; i<120; i++){
    setTimeout(tickTack, 1000*i);
}

function tickTack(){
    if(tickLog == false){
        output.innerHTML = '<p style="color: red;">Tick</p>';
        tickLog = true;
    }else{
        output.innerHTML = '<p style="color: green;">Tack</p>';
        tickLog = false;
    }
}