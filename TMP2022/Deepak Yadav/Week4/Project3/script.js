function val()
{
    var Fname=document.getElementById('fname').value;
    var male=document.getElementById('male');
    var female=document.getElementById('female');
    var age =document.getElementById('age').value;
    var degree =document.getElementById('degree').value;
    var gyear =document.getElementById('gyear').value;
    var resume = document.getElementById('resume').required;
    if(Fname=="")
    {
        alert("Please fill Name field");
        return false;
    }
    else if(male.checked==false && female.checked==false)
    {
        alert("Please select gender");
        return false;
    }
    else if(age=="")
    {
        alert("Age is compulsory");
        return false;
    }
    else if(age<18)
    {
        alert("Age must be 18");
        return false;
    }
    else if(degree=='null')
    {
        alert("please select a Degree");
        return false;
    }
    else if(gyear=="")
    {
        alert("please select Graduation Year");
        return false;
    }
    else if(resume==false)
    {
        alert("Please upload a resume");
        return false;
    }
    else{
        alert("Form Submitted succeessfully!");
        return true;
    }
}