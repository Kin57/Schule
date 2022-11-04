let output = document.getElementById("output");

tick();
setInterval(tick, 2000);

setTimeout(function(){
    tack();
    setInterval(tack, 2000)
}, 1000);

function tick(){
    output.innerHTML = '<p style="color: red;">Tick</p>';
    console.log('tick');
}
function tack(){
    output.innerHTML = '<p style="color: green;">Tack</p>';
    console.log('tack');
}