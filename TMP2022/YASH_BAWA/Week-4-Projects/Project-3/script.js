const validate = () => {
    console.log('sdsmd');
    if (form.name.value == "")
    {
        alert ("Enter your name")
    }
    else if (form.age.value == "")
    {
        alert ("Enter the age");
    }
    else if (form.graduation_year.value == ' '){
        alert ("Enter the graduation year")
    }
    else if (form.input_item.value == ' ')
    {
        alert ("Brief about yourself")
    }
    else if (form.degree.value == " ")
    {
        alert ("Details about your degree")
    }
    else{
        console.log("pass")
        alert ("The form has been successfully Submitted ☻");
    // document.getElementById("content").innerHTML = "Your form has been successfully Submitted ☻";
    }
}