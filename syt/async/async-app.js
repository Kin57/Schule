let output = document.getElementById("output");

output.innerHTML += 'Step 1<br>';
console.log('Step 1');

setTimeout(function() {
    output.innerHTML += 'Step 2<br>';
    console.log('Step 2');
}, 1000);


setTimeout(function() {
    output.innerHTML += 'Step 3<br>';
    console.log('Step 3');
}, 500);


setTimeout(function() {
    output.innerHTML += 'Step 4<br>';
    console.log('Step 4');
}, 25);

output.innerHTML += 'Step 5<br>';
console.log('Step 5');