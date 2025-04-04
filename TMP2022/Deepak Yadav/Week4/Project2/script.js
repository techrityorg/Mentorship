function insert(n)
{
    document.mainform.txt.value= document.mainform.txt.value + n;
}
function res()
{
    var exp = document.mainform.txt.value;
    if(exp)
    {
        document.mainform.txt.value= eval(exp);
    }
}
function backspace()
{
var exp = document.mainform.txt.value;
document.mainform.txt.value = exp.substring(0, exp.length - 1);
}
