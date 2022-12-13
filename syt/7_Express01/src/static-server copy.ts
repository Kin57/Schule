getCounter();
function getCounter(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            let data = JSON.parse(this.responseText);
        }
    }

    xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhttp.send();
}