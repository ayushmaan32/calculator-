var outputscreen = document.getElementById('output-screen');

function display(num){
    outputscreen.value += num;
}
function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch (err) {
        alert("Invalid");
    }
}
// function clear() {
//     var outputscreen = document.getElementById('output-screen');
//     outputscreen.value ="";
//     console.log(outputscreen.value);
// }
function delt () {
    outputscreen.value = outputscreen.value.slice(0,-1);
}
var button = document.querySelectorAll('btn');
document.button.addEventListner('keydown',function(event) {
   console.log(event.key);
    
})
