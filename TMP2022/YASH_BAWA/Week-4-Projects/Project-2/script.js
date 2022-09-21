let temp;
let output;
function valuebutton (e)
{
    output = document.getElementById("screen");
    output.value += e;
    temp = output.value;
    console.log(temp);
}
console.log(temp);
function calculate (){
    output = document.getElementById("screen");
    output.value= eval(output.value);
}
console.log(temp);
function clear(a){
    console.log(output.value);
    output = document.getElementById("screen");
    output.value=a;
    console.log(a);
// 
}