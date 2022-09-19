const validate = () => {
    console.log('asas');
    if (form.name.value == "")
    {
        alert ("Enter your name")
    }
    else if (form.age.value == "")
    {
        alert ("Enter the age");
    }
    else if (form.graduation-year.value == ' '){
        alert ("Enter the graduation year")
    }
    else if (form.input-item.value == ' ')
    {
        alert ("Brief about yourself")
    }
    else if (form.degree.value == " ")
    {
        alert ("Details about your degree")
    }
    else{
        alert ("The form has been successfully Submitted ☻");
    // document.getElementById("content").innerHTML = "Your form has been successfully Submitted ☻";
    }
}