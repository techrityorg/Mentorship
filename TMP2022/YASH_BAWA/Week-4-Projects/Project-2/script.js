let temp;
let output;
function valuebutton (e)
{
    output = document.getElementById("screen");
    output.value += e;
    temp = output.value;
    console.log(temp);
}
function calculate (){
    output = document.getElementById("screen");
    output.value= eval(output.value);
}
function clearValue(){
    output = document.getElementById("screen");
    output.value="";
// 
}